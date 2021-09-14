import { useState, useEffect } from "react";
import { BiBookOpen, BiTv } from "react-icons/bi";
import OutPutMenuItem from "../../../components/OutPutMenuItem";
import { useRouter } from "next/router";
import Headers from "../../../components/Headers";
import OutPutBillStatement from "../../../components/OutPutBillStatement"
import OutPutDashboard from "../../../components/OutPutDashboard"

export default function index() {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState("Dashboard");
  useEffect(() => {
    const pathHash = router.asPath.split("#_p1g5_layout/")[1];
    pathHash !== undefined
      ? setActiveMenu(decodeURIComponent(pathHash))
      : (window.location.hash = "_p1g5_layout/" + activeMenu);
  }, [router.pathname]);
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto">
      <Headers title=" Sortie Stock | Umarps Shop Manager" />
      <div className="bg-white mt-4 rounded flex flex-col shadow col-span-2 h-60">
        <OutPutMenuItem
          activeMenu={activeMenu}
          design="rounded-t"
          name="Dashboard"
          icon={<BiTv size="1.4rem" />}
          onClick={(menu) => setActiveMenu(menu)}
        />
        <OutPutMenuItem
          activeMenu={activeMenu}
          name="Rélévé de sortie"
          icon={<BiBookOpen size="1.4rem" />}
          onClick={(menu) => setActiveMenu(menu)}
        />
      </div>
      <div className="flex flex-col justify-center col-span-10 mt-4 rounded shadow h-auto p-3 ml-2 bg-white">
        <OutPutBillStatement activeMenu={activeMenu} />
        <OutPutDashboard activeMenu={activeMenu}/>
      </div>
    </div>
  );
}
