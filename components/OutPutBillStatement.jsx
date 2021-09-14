import { useState, useRef } from "react";
import { FaPollH, FaTv } from "react-icons/fa";
import { getBillStatement } from "../pages/api/output";
import BillHeader from "./BillHeader";
import Datalist from "./Datalist";

export default function OutPutBillStatement({ activeMenu }) {
    const billRef = useRef()
  const [billNumber, setBillNumber] = useState("");
  const [billStatement, setBillStatement] = useState([]);
  function onSearchBill(event) {
    setBillNumber(event.target.value);
    getBillStatement(event.target.value).then((res) => {
      if (res.type === "success") {
        setBillStatement(res.data);
      } else {
        //make some alert error message
      }
    });
  }
  /**
   * Render the statement
   */
  function showBillStatement(){
      
  }
  return (
    <div
      className={
        activeMenu === "Rélévé de sortie"
          ? "flex flex-col w-11/12 relative  h-60 justify-center"
          : "hidden"
      }
    >
      <div className="w-full absolute top-2 flex justify-center ">
        <Datalist
          event={onSearchBill}
          placeholder="Entrer le numéro de la  commande"
          value={billNumber}
          name="command"
          style="h-12 w-5/12 mx-auto"
          icon={ <FaPollH/>}
          secondIcon={ billStatement.length > 0 ? (
            <button onClick={showBillStatement} className="flex primaryBg w-full rounded justify-center">
               <FaTv className="text-white h-8 my-auto" />
            </button>
          ) : undefined
          }
        ></Datalist>
      </div>
      <div className="w-full flex justify-center h-52 items-center">
         <div className="w-11/12 ml-12 h-48 border p-2" ref={billRef}>
            <BillHeader/>
         </div>
      </div>
    </div>
  );
}
