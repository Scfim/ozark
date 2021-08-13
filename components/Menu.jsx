import React, { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Router from "next/router";

export default function Menu({
  router,
  isOpened,
  title,
  icon,
  activeMenu,
  children,
  isDropDown,
  withShadow = true
}) {
  if (!isDropDown)
    return (
      <div
        onClick={() => Router.push(router)}
        key={title}
        className={`flex cursor-pointer bg-white hover-menus-parent h-12  items-center w-11/12 text-gray-700 justify-between rounded p-2 my-2 mx-auto ${withShadow && "shadow"} `}
      >
        <div>{icon}</div>
        <div className="w-10/12">{title}</div>
      </div>
    );
  else
    return (
      <div
        key={title}
        className={`flex flex-col bg-white w-11/12 justify-center rounded p-2 my-2 mx-auto ${withShadow && "shadow" } `}
      >
        <div
          data-menu={title}
          className="flex cursor-pointer w-full mr-1 h-9 hover-menus-parent rounded hover:shadow p-1 items-center text-gray-700 justify-between"
        >
          <div>{icon}</div>
          <div>{title}</div>
          <div>
            <FaChevronCircleRight className="text-gray-600 menu-icon" />
          </div>
        </div>
        <div className="h-0 menu-items-wrapper overflow-hidden">{children}</div>
      </div>
    );
}

Menu.defaultProps = {
  isDropDown: true,
  isOpened: false,
  icon: "",
  activeMenu: "",
  children: <div>lorem</div>,
  router: "/",
};
Menu.propTypes = {
  isOpened: PropTypes.bool,
  isDropDown: PropTypes.bool,
  icon: PropTypes.any,
  children: PropTypes.element,
  router: PropTypes.string.isRequired,
};
