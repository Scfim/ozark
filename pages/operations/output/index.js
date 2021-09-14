import { useState, useEffect } from "react";
import { BiBookOpen, BiTv } from "react-icons/bi";
import OutPutMenuItem from "../../../components/OutPutMenuItem";
import { useRouter } from "next/router";
import { FaPollH } from "react-icons/fa";
import Datalist from "../../../components/Datalist";
import { getBillStatement } from "../../api/output";
import Headers from "../../../components/Headers";

export default function index() {
    const [billNumber, setBillNumber] = useState("")
    const [billStatement, setBillStatement] = useState([])
  function onSearchBill(event) {
    setBillNumber(event.target.value)
    getBillStatement(event.target.value).then(res =>{
        console.log(res)
        setBillStatement
    })
  }
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
      <div className="grid col-span-10 mt-4 rounded shadow h-auto p-3 ml-2 bg-white">
        <Datalist
          event={onSearchBill}
          placeholder="Entrer le numéro de la  commande"
          value={billNumber}
          name="command"
          style="h-12 w-5/12 mx-auto"
          icon={<FaPollH />}
        ></Datalist>
      </div>
    </div>
  );
}
