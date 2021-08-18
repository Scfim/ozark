import React from "react";
import Router from "next/router";

export default function NavBarLink({
  activeLayout,
  layoutName,
  onClickLayout,
  route,
}) {
  return (
    <div data-link={route}
      onClick={() => {
        Router.push(route);
        onClickLayout(layoutName);
      }}
      className={`p-2 ${
        activeLayout === layoutName ? "active-menus-parent" : "bg-gray-200"
      } hover-menus-parent rounded cursor-pointer`}
    >
      {layoutName}
    </div>
  );
}

NavBarLink.defaultProps = {
  activeLayout: "Dashboard",
  layoutName: "Nom du composant lien",
  onClickLayout: (e) => {
    console.log(e);
  },
  route: "/",
};
