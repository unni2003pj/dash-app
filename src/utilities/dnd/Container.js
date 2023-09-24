import React, { useState, useCallback, useEffect } from "react";
import { Space, Button } from "antd";
import { IconAdd, IconCustomize } from "../Iconsheet";
import DropZone from "./DropZone";
import TrashDropZone from "./TrashDropZone";
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
import {
  IconWidget,
  IconWidgetClose
} from '../../utilities/Iconsheet';

const Container = (props) => {
  const initialLayout = initialData.layout;
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);
  const [components, setComponents] = useState(initialComponents);
  const [addColumnSelect, setAddColumnSelect] = useState(false);
  const [selectedRow, setSelectedRow] = useState('');

  const { addRow, addColumn, setAddRow, setAddColumn } = props;

  useEffect(() => {
    if (addRow) handleAddRow()
  }, [addRow])

  useEffect(() => {
    if (addColumn) handleAddColumn()
  }, [addColumn])

  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
    },
    [layout]
  );

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
    }

    const handleColumnDelete = (rawId, columnId) => {
      setLayout(handleRemoveRowColumn(layout, rawId, columnId));
    }

    return (
      <div onClick={() => { handleRowSelect(row.id) }}
        className={`${row.id == selectedRow ? 'selected' : ''}`
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
    if (selectedRow != '') {
      setLayout(handleAddColumDataToSelectedRow(layout, selectedRow));
    } else {
      alert('Please select row')
    }
    setAddColumn(false);
  }

  const handleAddRow = () => {
    setAddRow(false);
    setLayout(handleAddNewRow(layout, selectedRow));
  }

  const handleSelectRow = (row) => {
    if (addColumnSelect) {
      setLayout(handleAddColumDataToSelectedRow(layout, row.id));
      setAddColumnSelect(false);
    }
  }

  return (

    <div className="dnd-wrapper">

      {/* <div className="dndButtons">
        <Button type="primary" onClick={handleAddRow}>
          <IconCustomize color="white" />
          <span>Add Row</span>
        </Button>
        <Button type="primary" onClick={handleAddColumn}>
          <IconCustomize color="white" />
          <span>Add Column</span>
        </Button>
        <Button type="primary">
          <IconCustomize color="white" />
          <span>Exit Customization</span>
        </Button>
      </div> */}

      <div className="drawer">
        <div className="drawer-header">
          <h5><IconWidget /> Widget</h5>
          <div className="drawer-right">
            <button className="actio-link">
              <IconWidgetClose />
            </button>
          </div>
        </div>
        <div className="drawer-body">

          {Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
            <SideBarItem key={sideBarItem.id} data={sideBarItem} />
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

        {/* <TrashDropZone
          data={{
            layout
          }}
          onDrop={handleDropToTrashBin}
        /> */}

      </div>

    </div>

  );

};
export default Container;
