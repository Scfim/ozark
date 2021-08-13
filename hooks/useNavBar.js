import { useState, useEffect } from "react";

export default function useNavBar() {
  const [navBarIsNeeded, setNavBarIsNeeded] = useState(true);
  useEffect(() => {
    window.addEventListener("load", getUrlPathName);

    function getUrlPathName() {
      const validPathNames = ["/login", "/users/add", '/users/profile'];
      const currentPathName = window.location.pathname;
     validPathNames.indexOf(currentPathName) !== -1 && setNavBarIsNeeded(false)
    }
    return () => {
      window.removeEventListener("load", getUrlPathName);
    };
  },[]);
  return navBarIsNeeded;
}
