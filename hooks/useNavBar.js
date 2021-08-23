import { useState, useEffect } from "react";
4;
import { useRouter } from "next/router";

export default function useNavBar() {
  const [navBarIsNeeded, setNavBarIsNeeded] = useState(true);
  const router = useRouter();
  useEffect(() => {
    function getPathname(load = false) {
      if (load) {
        console.log("me");
        const validPathNames = ["/login", "/users/add", "/users/profile"];
        const currentPathName = router.pathname;
        console.log(currentPathName);
        validPathNames.indexOf(currentPathName) !== -1 &&
          setNavBarIsNeeded(false);
      }
    }
    getPathname(true);
    return () => getPathname();
  }, [router.pathname, navBarIsNeeded]);
  return navBarIsNeeded;
}
