import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import DropZone from "./DropZone";
import Column from "./Column";

const style = {};
const Row = ({ data, components, handleDrop, path, rowDeleteCallback, colunDeleteCallback }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ROW,
      id: data.id,
      children: data.children,
      path
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const deleteRow = (id) => {
    rowDeleteCallback(id);
  }

  const renderColumn = (column, currentPath, rowId) => {

    const handleDeleteColumn = () => {
      colunDeleteCallback(rowId, column.id);
    }

    return (
      <Column
        key={column.id}
        data={column}
        components={components}
        handleDrop={handleDrop}
        path={currentPath}
        handleDeleteColumn={handleDeleteColumn}
      />
    );
  };

  return (
    <div ref={ref} style={{ ...style, opacity }} className="base draggable row">
      <a onClick={() => { deleteRow(data.id) }} className="remove-row">remove row</a>
      {data.id}
      <div className="columns">
        {data.children.map((column, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
                className="horizontalDrag"
              />
              {renderColumn(column, currentPath, data.id)}
            </React.Fragment>
          );
        })}
        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
        />
      </div>
    </div>
  );
};
export default Row;