import React from "react";

function Sidebar(props) {
  return (
    <div>
      {props.icon}
      <span>{props.title}</span>
    </div>
  );
}

export default Sidebar;
