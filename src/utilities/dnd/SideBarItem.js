import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data, sideBarHide }) => {
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });

  return (
    <div className="each-widget" ref={drag} style={{ opacity }} onDrag={() => { sideBarHide(false) }}>
      {data.component.type}
    </div>
  );
};
export default SideBarItem;
