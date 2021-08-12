import React from "react";
import {
  textBoxStyle,
  textBoxWrapper,
  textBoxInitial,
} from "../styles/TextBoxes.module.css";
import PropTypes from "prop-types";

<<<<<<< HEAD
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
=======
function DataList({ type, icon, placeholder, name, value, event, options }) {
  return (
    <>
      <div
        className={`bg-blue-50 w-full rounded-md my-2 h-26 flex justify-around items-center ${textBoxWrapper} ${textBoxInitial}`}
>>>>>>> 6b022236e440ed7b9e5c6ae7d83c35ea92df14a5
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
                  <option key={option.value} value={option.value}>
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
<<<<<<< HEAD
  style: "",
=======
>>>>>>> 6b022236e440ed7b9e5c6ae7d83c35ea92df14a5
};

DataList.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  icon: PropTypes.any,
  options: PropTypes.array.isRequired,
<<<<<<< HEAD
  style: PropTypes.string,
=======
>>>>>>> 6b022236e440ed7b9e5c6ae7d83c35ea92df14a5
};

export default DataList;
