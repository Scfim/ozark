import React, { Children } from "react";
import {
  textBoxStyle,
  textBoxWrapper,
  textBoxInitial,
} from "../styles/TextBoxes.module.css";
import PropTypes from "prop-types";

function DataList({ icon, placeholder, value, event, style, children }) {
  return (
    <>
      <div
        className={`bg-blue-50 z-0 ${style} relative w-full rounded-md my-2  ${textBoxWrapper} ${textBoxInitial}`}
      >
        <div className="flex justify-around items-center ">
          <span className="w-6 ml-1 text-gray-600  h-26">{icon}</span>
          <input
            placeholder={placeholder}
            className={`${textBoxStyle} w-full mr-1`}
            value={value}
            onChange={event}
            data-type="list"
            type="text"
          />
        </div>
            {children}
      </div>
    </>
  );
}

DataList.defaultProps = {
  name: "umarps",
  placeholder: "Umarps DataList",
  type: "list",
  value: "",
  event: (e) => {
    console.log(e.currentTarget.value);
  },
  icon: undefined,
  options: [{}],
  style: "",
};

DataList.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  icon: PropTypes.any,
  options: PropTypes.array.isRequired,
  style: PropTypes.string,
};

export default React.memo(DataList);
