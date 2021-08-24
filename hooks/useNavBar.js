import { useState, useEffect } from "react";
4;
import { useRouter } from "next/router";

export default function useNavBar() {
  const [navBarIsNeeded, setNavBarIsNeeded] = useState(true);
  const router = useRouter();
  useEffect(() => {
    function getPathname(load = false) {
      if (load) {
        const currentPathName = router.pathname;
        if(currentPathName === "/login"){
          setNavBarIsNeeded(false)
        }
      }
    }
    getPathname(true);
    return () => getPathname();
  }, [router.pathname, navBarIsNeeded]);
  console.log(navBarIsNeeded)
  return navBarIsNeeded;
}
