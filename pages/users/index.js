import React from "react";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

export default function index() {
  useIsLoggedIn();
  return (
    <div className="grid place-items-center">
      <div className="grid place-items-center"></div>
    </div>
  );
}
