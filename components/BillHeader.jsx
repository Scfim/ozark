import React from "react";
import BillHeadText from "./BillHeadText";
import PropTypes from "prop-types";

export default function BillHeader({ number, customer }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="w-1/2">
          <BillHeadText value="MAISON MBULA" />
        </div>
        <div className="w-1/2">
          <BillHeadText
            value={"Butembo, Le " + new Date().toLocaleDateString("fr")}
          />
        </div>
      </div>
      <BillHeadText value="GALERIE DE LUX No 14" />
      <BillHeadText value="BUTEMBO RUE KINSHASA" />
      <BillHeadText value="No TEL : 243 991 829 618, 243 814 480 157" />
      <BillHeadText
        classes="text-center font-semibold mt-1 mb-2"
        value={"RELEVE DE LA COMMANDE No " + number}
      />
      <BillHeadText classes="mt-1" value={"Nom du client : " + customer} />
    </div>
  );
}
BillHeader.defaultProps = {
  number: 11,
  customer: "AGGESTOR",
};
BillHeader.propTypes = {
  number: PropTypes.number,
  customer: PropTypes.string,
};
