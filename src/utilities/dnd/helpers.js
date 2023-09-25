import shortid from "shortid";
import { ROW, COLUMN, COMPONENT } from "./constants";
import { message } from "antd";

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed); // inserting task in new index

  return result;
};

export const remove = (arr, index) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // part of the array after the specified index
  ...arr.slice(index + 1)
];

export const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
];

export const reorderChildren = (children, splitDropZonePath, splitItemPath) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    const itemIndex = Number(splitItemPath[0]);
    return reorder(children, itemIndex, dropZoneIndex);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitDropZonePath.slice(0, 1));

  // Update the specific node's children
  const splitDropZoneChildrenPath = splitDropZonePath.slice(1);
  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: reorderChildren(
      nodeChildren.children,
      splitDropZoneChildrenPath,
      splitItemChildrenPath
    )
  };

  return updatedChildren;
};

export const removeChildFromChildren = (children, splitItemPath) => {
  if (splitItemPath.length === 1) {
    const itemIndex = Number(splitItemPath[0]);
    return remove(children, itemIndex);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitItemPath.slice(0, 1));

  // Update the specific node's children
  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: removeChildFromChildren(
      nodeChildren.children,
      splitItemChildrenPath
    )
  };

  return updatedChildren;
};

export const addChildToChildren = (children, splitDropZonePath, item) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    return insert(children, dropZoneIndex, item);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitDropZonePath.slice(0, 1));

  // Update the specific node's children
  const splitItemChildrenPath = splitDropZonePath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: addChildToChildren(
      nodeChildren.children,
      splitItemChildrenPath,
      item
    )
  };

  return updatedChildren;
};

export const handleMoveWithinParent = (
  layout,
  splitDropZonePath,
  splitItemPath
) => {
  return reorderChildren(layout, splitDropZonePath, splitItemPath);
};

export const handleAddColumDataToRow = layout => {
  const layoutCopy = [...layout];
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: []
  };

  return layoutCopy.map(row => {
    if (!row.children.length) {
      row.children = [COLUMN_STRUCTURE];
    }
    return row;
  });
};

export const handleMoveToDifferentParent = (
  layout,
  splitDropZonePath,
  splitItemPath,
  item
) => {
  let newLayoutStructure;
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: [item]
  };

  const ROW_STRUCTURE = {
    type: ROW,
    id: shortid.generate()
  };

  switch (splitDropZonePath.length) {
    case 1: {
      // moving column outside into new row made on the fly
      if (item.type === COLUMN) {
        newLayoutStructure = {
          ...ROW_STRUCTURE,
          children: [item]
        };
      } else {
        // moving component outside into new row made on the fly
        newLayoutStructure = {
          ...ROW_STRUCTURE,
          children: [COLUMN_STRUCTURE]
        };
      }
      break;
    }
    case 2: {
      // moving component outside into a row which creates column
      if (item.type === COMPONENT) {
        newLayoutStructure = COLUMN_STRUCTURE;
      } else {
        // moving column into existing row
        newLayoutStructure = item;
      }

      break;
    }
    default: {
      newLayoutStructure = item;
    }
  }

  let updatedLayout = layout;
  updatedLayout = removeChildFromChildren(updatedLayout, splitItemPath);
  updatedLayout = handleAddColumDataToRow(updatedLayout);
  updatedLayout = addChildToChildren(
    updatedLayout,
    splitDropZonePath,
    newLayoutStructure
  );

  return updatedLayout;
};

export const handleMoveSidebarComponentIntoParent = (
  layout,
  splitDropZonePath,
  item
) => {
  let newLayoutStructure;
  switch (splitDropZonePath.length) {
    case 1: {
      newLayoutStructure = {
        type: ROW,
        id: shortid.generate(),
        children: [{ type: COLUMN, id: shortid.generate(), children: [item] }]
      };
      break;
    }
    case 2: {
      newLayoutStructure = {
        type: COLUMN,
        id: shortid.generate(),
        children: [item]
      };
      break;
    }
    default: {
      newLayoutStructure = item;
    }
  }

  return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
};

export const handleAddNewRow = (layout, selectedRow) => {
  let selectedArrayIndex = layout.map(function (x) { return x.id; }).indexOf(selectedRow);
  let newRowId = 'row' + shortid.generate();
  let layoutCopy = [...layout];
  layoutCopy.push({
    type: ROW,
    id: newRowId,
    children: []
  });
  let newArrayIndex = layoutCopy.map(function (x) { return x.id; }).indexOf(newRowId);
  if (selectedRow !== '') layoutCopy = array_move(layoutCopy, newArrayIndex, selectedArrayIndex + 1);
  message.success('Row Added');
  return layoutCopy;
}

export const handleAddColumDataToSelectedRow = (layout, rowId) => {
  const layoutCopy = [...layout];
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: [
      {
        type: COMPONENT,
        id: "addContentComponent"
      }
    ]
  };

  return layoutCopy.map(row => {
    if (row.id === rowId) {
      if (row.children.length < 6) {
        row.children = [...row.children, COLUMN_STRUCTURE];
        message.success('Column Added');
      } else {
        message.error('Column Limit Exceeded')
      }

    }
    return row;
  });
};

export const handleRemoveRow = (layout, rowId) => {
  const layoutCopy = [...layout];
  message.success('Row deleted');
  return layoutCopy.filter(item => item.id !== rowId)
};

export const handleRemoveRowColumn = (layout, rowId, columnId) => {
  const layoutCopy = [...layout];
  return layoutCopy.map(row => {
    if (row.id === rowId) {
      row.children.splice(row.children.findIndex(function (i) {
        message.success('Column deleted');
        return i.id === columnId;
      }), 1);
    }
    return row;
  });
};

export const handleRemoveItemFromLayout = (layout, splitItemPath) => {
  return removeChildFromChildren(layout, splitItemPath);
};

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};