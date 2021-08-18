import React from "react";
import { BiFullscreen } from "react-icons/bi";
import { FaBars, FaCog, FaMoon, FaPowerOff } from "react-icons/fa";
import NavBarLink from "./NavBarLink";

export default function NavBar({ activeLayout, onSetNewLayout, links }) {
  return (
    <div className="flex w-full items-center font-semibold shadow rounded bg-white text-gray-700 p-1">
      <div className="mx-2">
        <FaBars size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div className="mx-2">
        <FaPowerOff size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div className="mx-2">
        <FaCog size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div className="mx-2">
        <FaMoon size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div className="mx-2">
        <BiFullscreen size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div className="cursor-pointer mx-3">Journal</div>

      <div className="cursor-pointer w-56 mx-3">Fiche de Stock</div>
      <div className="cursor-pointer ">Inventaire</div>
      <div className="w-full flex justify-end">
        <div className="w-9/12 flex items-center  justify-evenly h-12 ">
          <NavBarLink layoutName="Dashboard" activeLayout={activeLayout} onClickLayout={onSetNewLayout} route={links.dash} />
          <NavBarLink layoutName="Formulaire" activeLayout={activeLayout} onClickLayout={onSetNewLayout} route={links.form}/>
          <NavBarLink layoutName="Données" activeLayout={activeLayout} onClickLayout={onSetNewLayout} route={links.data}/>
        </div>
      </div>
      <div>
        <div className="w-10 cursor-pointer relative h-10 rounded-full flex-col flex">
          <img
            src="/people/jl.jpg"
            className="object-contain rounded-full w-full h-full"
          />
          <span className="absolute shadow w-2 h-2 z-30 bottom-0 right-0 rounded-full bg-green-400 p-2"></span>
        </div>
      </div>
    </div>
  );
}
