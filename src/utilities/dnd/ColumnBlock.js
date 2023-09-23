import React, { useRef } from "react";
// import {Col} from "antd";
import {Col} from "react-bootstrap";

import { useDrag } from "react-dnd";
import { COLUMN } from "./constants";
import DropZone from "./DropZone";
import Component from "./Component";

import {
  IconClose
} from '../Iconsheet';

const style = {};
const ColumnBlock = ({ data, components, handleDrop, path, handleDeleteColumn }) => {

  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: COLUMN,
      id: data.id,
      children: data.children,
      path
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })

  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderComponent = (component, currentPath) => {
    return (
      <Component
        key={component.id}
        data={component}
        components={components}
        path={currentPath}
      />
    );
  };

  const removeColumnHandler = () => {
    handleDeleteColumn();
  }

  return (

    
    <Col ref={ref} style={{ ...style, opacity }} className="draggable-column">

      {/* <a className="remove-column" onClick={removeColumnHandler}>Remove Column</a> */}

      <nav onClick={removeColumnHandler} className="remove-icon">
        <IconClose/>
      </nav>

      {/* {data.id} */}

      {data.children.map((component, index) => {
        const currentPath = `${path}-${index}`;

        return (

          <React.Fragment key={component.id}>
            <DropZone
              data={{
                path: currentPath,
                childrenCount: data.children.length
              }}
              onDrop={handleDrop}
            />
            {renderComponent(component, currentPath)}
          </React.Fragment>

        );

      })}

      <DropZone
        data={{
          path: `${path}-${data.children.length}`,
          childrenCount: data.children.length
        }}
        onDrop={handleDrop}
        isLast
      />

    </Col>
    
  );
};

export default ColumnBlock;
