import React, { useState, useCallback, useEffect } from "react";
import { Button, Space, Card, Breadcrumb, Menu, Dropdown, Avatar, Tag, Progress, Select, Drawer, Checkbox, Radio } from 'antd';

import {
  IconCustomize

} from '../../utilities/Iconsheet';
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

const Container = (props) => {
const initialLayout = initialData.layout;
const initialComponents = initialData.components;
const [layout, setLayout] = useState(initialLayout);
const [components, setComponents] = useState(initialComponents);
const [addColumnSelect, setAddColumnSelect] = useState(false);

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

const renderRow = (row, currentPath, layout) => {

  const handleRowDelete = (id) => {
    setLayout(handleRemoveRow(layout, id));
  }

  const handleColumnDelete = (rawId, columnId) => {
    setLayout(handleRemoveRowColumn(layout, rawId, columnId));
  }

  return (
    <Row
      key={row.id}
      data={row}
      handleDrop={handleDrop}
      components={components}
      path={currentPath}
      rowDeleteCallback={(id) => { handleRowDelete(id) }}
      colunDeleteCallback={(rawId, colunId) => { handleColumnDelete(rawId, colunId) }}
    />
  );
};

const handleAddColumn = () => {
  setAddColumnSelect(true);
}

const handleAddRow = () => {

  setLayout(handleAddNewRow(layout));
}

const handleSelectRow = (row) => {
  if (addColumnSelect) {
    setLayout(handleAddColumDataToSelectedRow(layout, row.id));
    setAddColumnSelect(false);
  }
}

  // dont use index for key when mapping over items
  // causes this issue - https://github.com/react-dnd/react-dnd/issues/342
  return (
    <div className="dnd-wrapper">

      <div className="dndButtons">
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
      </div>

      <div className="sideBar">
        {Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
          <SideBarItem key={sideBarItem.id} data={sideBarItem} />
        ))}
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
