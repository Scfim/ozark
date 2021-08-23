import React from "react";
import {
  textBoxStyle,
  textBoxWrapper,
  textBoxInitial,
} from "../styles/TextBoxes.module.css";
import PropTypes from "prop-types";

function DataList({
  icon,
  placeholder,
  name,
  value,
  event,
  options,
  style,
}) {
  return (
    <>
      <div
        className={`bg-blue-50 ${style} w-full rounded-md my-2 h-26 flex justify-around items-center ${textBoxWrapper} ${textBoxInitial}`}
      >
        <span className="w-6 ml-1 text-gray-600">{icon}</span>
        <input
          name={name}
          placeholder={placeholder}
          className={`${textBoxStyle} w-full mr-1`}
          list={name}
          value={value}
          onInput={event}
        />
        <datalist id={name}>
          {options.length > 0
            ? options.map((option) => {
                return (
                  <option key={option.value+option.key} value={option.value}>
                    {option.key}
                  </option>
                );
              })
            : null}
        </datalist>
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

export default DataList;
