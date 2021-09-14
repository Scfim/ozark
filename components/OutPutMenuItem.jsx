import React from "react";

export default function OutPutMenuItem({ name,activeMenu ,onClick, icon, design }) {
  return (
    <div className={`grid grid-cols-6 ${activeMenu === name ? "primaryBg text-white": "primaryBgHovered text-gray-700"} mb-2 cursor-pointer  p-2 ${design}`} onClick={() => {
        onClick(name)
        window.location.hash = "_p1g5_layout/"+name
    }}>
      <span className="col-span-1">{icon}</span>
      <span className="col-span-5 pl-3">{name}</span>
    </div>
  );
}

OutPutMenuItem.defaultProps = {
  name: "Menu name",
  onClick(e) {
    console.log(e.target);
  },
  icon: <i>icon here</i>,
};
