import React from "react";
import Router from "next/router";
import { FaIcons } from "react-icons/fa";
import PropTypes from "prop-types";

export default function MenuItem({ title, icon, route, currentRoute }) {
  return (
    <div
      className="flex cursor-pointer hover:bg-gray-50 rounded hover:shadow justify-between h-10 items-center p-2"
      onClick={() => Router.push(route)}
    >
      <div className="w-2/12">{icon}</div>
      <div className="w-10/12">{title}</div>
    </div>
  );
}

MenuItem.defaultProps = {
  title: "some title",
  icon: <FaIcons />,
  route: "/",
  currentRoute: "",
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  route: PropTypes.string,
  currentRoute: PropTypes.string,
};
