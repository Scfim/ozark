import React from "react";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

export default function index() {
  useIsLoggedIn();
  return (
      <div className="grid w-11/12 mx-auto mt-3 grid-cols-12">
        <div className="col-span-4 mr-1 shadow rounded h-80 bg-white">

        </div>
        <div className="col-span-8 ml-1 shadow rounded h-80 bg-white">
          <h1 className="text-2xl text-gray-700 font-semibold text-center">Tous les utilisateurs disponibles (0)</h1>
        </div>
      </div>
  );
}
