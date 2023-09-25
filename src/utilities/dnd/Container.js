import React, { useState, useCallback, useEffect } from "react";
import { message } from "antd";
import {
  IconWidget,
  IconWidgetClose
} from '../../utilities/Iconsheet';
import DropZone from "./DropZone";
import SideBarItem from "./SideBarItem";
import Row from "./RowBlock";
import initialData from "./initial-data";
import {
  handleMoveWithinParent,
  handleMoveToDifferentParent,
  handleMoveSidebarComponentIntoParent,
  handleRemoveItemFromLayout,
  handleAddNewRow,
  handleAddColumDataToSelectedRow,
  handleRemoveRow,
  handleRemoveRowColumn
} from "./helpers";
import { SIDEBAR_ITEMS, SIDEBAR_ITEM, COMPONENT, COLUMN } from "./constants";
import shortid from "shortid";

const Container = (props) => {
  const initialLayout = initialData.layout;
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);
  const [components, setComponents] = useState(initialComponents);
  const [addColumnSelect, setAddColumnSelect] = useState(false);
  const [selectedRow, setSelectedRow] = useState('');
  const [oldLayout, setOldLayout] = useState(layout);
  const { addRow, addColumn, setAddRow, setAddColumn, enebleSideBar, setEnebleSideBar } = props;

  useEffect(() => {
    if (addRow) handleAddRow()
  }, [addRow])

  useEffect(() => {
    if (addColumn) handleAddColumn()
  }, [addColumn])

  useEffect(() => {
    findNewlyAddedRow();
  }, [layout])

  const findNewlyAddedRow = () => {
    console.log('layout', layout);
    var difference = layout.filter(x => !oldLayout.includes(x));
    if (difference.length && difference.length !== layout.length) setSelectedRow(difference[0]?.id);
    console.log('difference', difference);
    setOldLayout(layout);
    if(difference.length !== 0) {
      setTimeout(function () {
        console.log(difference[0].id)
        const element = document.getElementById(difference[0].id);
        console.log(element);
        if (element !== null) {
          element.scrollIntoView({behavior: "smooth"});
        }
      }, 10);
    } 
  }

  const handleDrop = useCallback(

    (dropZone, item) => {

      const splitDropZonePath = dropZone.path.split("-");
      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
      const newItem = { id: item.id, type: item.type };

      if (item.type === COLUMN) {
        newItem.children = item.children;
      }

      // sidebar into
      if (item.type === SIDEBAR_ITEM) {

        // 1. Move sidebar item into page
        const newComponent = {
          id: shortid.generate(),
          ...item.component
        };

        const newItem = {
          id: newComponent.id,
          type: COMPONENT
        };

        setComponents({
          ...components,
          [newComponent.id]: newComponent
        });

        setLayout(
          handleMoveSidebarComponentIntoParent(
            layout,
            splitDropZonePath,
            newItem
          )
        );

        return;
      }

      // move down here since sidebar items dont have path
      const splitItemPath = item.path.split("-");
      const pathToItem = splitItemPath.slice(0, -1).join("-");

      // 2. Pure move (no create)
      if (splitItemPath.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          setLayout(
            handleMoveWithinParent(layout, splitDropZonePath, splitItemPath)
          );
          return;
        }

        // 2.b. OR move different parent
        // TODO FIX columns. item includes children
        setLayout(
          handleMoveToDifferentParent(
            layout,
            splitDropZonePath,
            splitItemPath,
            newItem
          )
        );
        return;
      }

      // 3. Move + Create
      setLayout(
        handleMoveToDifferentParent(
          layout,
          splitDropZonePath,
          splitItemPath,
          newItem
        )
      );
    },
    [layout, components]
  );

  const handleRowSelect = (rowId) => {
    console.log('rowSelectedID', rowId);
    setSelectedRow(rowId);
  }

  const renderRow = (row, currentPath, layout) => {

    const handleRowDelete = (id) => {
      setLayout(handleRemoveRow(layout, id));
      setSelectedRow('');
    }

    const handleColumnDelete = (rawId, columnId) => {
      setLayout(handleRemoveRowColumn(layout, rawId, columnId));
    }

    return (
      <div onClick={() => { handleRowSelect(row.id) }}
        className={`${row.id === selectedRow ? 'selected' : ''}`
        }>
        <Row
          key={row.id}
          data={row}
          handleDrop={handleDrop}
          components={components}
          path={currentPath}
          rowDeleteCallback={(id) => { handleRowDelete(id) }}
          colunDeleteCallback={(rawId, colunId) => { handleColumnDelete(rawId, colunId) }}
        />
      </div >
    );
  };

  const handleAddColumn = () => {
    console.log('clicked')
    console.log('selectedRow', selectedRow)
    if (selectedRow !== '') {
      setLayout(handleAddColumDataToSelectedRow(layout, selectedRow));
    } else {
      message.error('Please select row to add column')
    }
    setAddColumn(false);
  }

  const handleAddRow = () => {
    setAddRow(false);
    setLayout(handleAddNewRow(layout, selectedRow));
    // console.log(layout);
  }

  const handleSelectRow = (row) => {
    if (addColumnSelect) {
      setLayout(handleAddColumDataToSelectedRow(layout, row.id));
      setAddColumnSelect(false);
    }
  }

  return (

    <div className="dnd-wrapper">

      <div className={`drawer ${enebleSideBar ? 'active' : ''}`}>
        <div className="drawer-header">
          <h5><IconWidget /> Widget</h5>
          <div className="drawer-right">
            <button className="actio-link" onClick={() => { setEnebleSideBar(false) }}>
              <IconWidgetClose />
            </button>
          </div>
        </div>
        <div className="drawer-body">

          {Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
            <SideBarItem key={sideBarItem.id} data={sideBarItem} sideBarHide={(value) => { setEnebleSideBar(value) }} />
          ))}

        </div>
      </div>

      <div className="dnd-container">
        <div className="dnd-page">
          {layout.map((row, index) => {
            const currentPath = `${index}`;
            return (
              <React.Fragment key={row.id}>
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: layout.length
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                />
                <div onClick={() => { handleSelectRow(row) }}>
                  {renderRow(row, currentPath, layout)}
                </div>
              </React.Fragment>
            );
          })}

          <DropZone
            data={{
              path: `${layout.length}`,
              childrenCount: layout.length
            }}
            onDrop={handleDrop}
            isLast
          />
        </div>
      </div>
    </div>

  );

};
export default Container;
