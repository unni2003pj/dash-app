import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";

const Component = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  // const opacity = isDragging ? 1 : 1;
  drag(ref);

  const component = components[data.id];

  return (
    <div ref={ref} className="component draggable">
      {/* <div>{data.id}</div> */}
      <>{component.content}</>
    </div>
  );
};
export default Component;
