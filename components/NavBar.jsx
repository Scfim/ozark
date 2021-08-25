import React, { useState } from "react";
import { BiFullscreen } from "react-icons/bi";
import { FaBars, FaCog, FaMoon, FaPowerOff } from "react-icons/fa";
import NavBarLink from "./NavBarLink";
import {useUserLogout} from "../pages/api/users"

export default function NavBar({ activeLayout, onSetNewLayout, links,onToggleNavbar }) {
  const [showModeSection, setShowModeSection] = useState(false);
  const onClickModeIcon = () => {};
  return (
    <div className="flex w-full items-center font-semibold shadow rounded bg-white text-gray-700 p-1">
      <div className="mx-2">
        <FaBars onClick={onToggleNavbar} size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div className="mx-2">
        <FaPowerOff onClick={()=> useUserLogout()} size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div className="mx-2">
        <FaCog size="1.3rem" className="text-gray-500 cursor-pointer" />
      </div>
      <div onClick={onClickModeIcon} className="mx-2 relative">
        <FaMoon size="1.3rem" className="text-gray-500 cursor-pointer" />
        <div className="absolute hidden -left-2 mt-2 top-10 bg-white p-3 rounded shadow z-30">
          <div className="relative">
            <span className="absolute -top-3 h-2.5 rotate-pi/2 z-10 w-2.5  bg-white border-t border-l p-2"></span>
            <div className="bg-white">
              <div className="text-xs border-b -m-2">Mode sombre</div>
              <div className="mt-1">
                <div>Activer</div>
                <div>Desactiver</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2">
        <BiFullscreen
          onClick={() =>
            document.documentElement.requestFullscreen &&
            document.documentElement.requestFullscreen()
          }
          size="1.3rem"
          className="text-gray-500 cursor-pointer"
        />
      </div>
      <div className="cursor-pointer mx-3">Journal</div>

      <div className="cursor-pointer w-56 mx-3">Fiche de Stock</div>
      <div className="cursor-pointer ">Inventaire</div>
      <div className="w-full flex justify-end">
        <div className="w-9/12 flex items-center  justify-evenly h-12 ">
          <NavBarLink
            layoutName="Dashboard"
            activeLayout={activeLayout}
            onClickLayout={onSetNewLayout}
            route={links.dash}
          />
          <NavBarLink
            layoutName="Formulaire"
            activeLayout={activeLayout}
            onClickLayout={onSetNewLayout}
            route={links.form}
          />
          <NavBarLink
            layoutName="Données"
            activeLayout={activeLayout}
            onClickLayout={onSetNewLayout}
            route={links.data}
          />
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
