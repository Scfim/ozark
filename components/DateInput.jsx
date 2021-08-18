import React from "react";
import {
  textBoxStyle,
  textBoxWrapper,
  textBoxInitial,
} from "../styles/TextBoxes.module.css";
import PropTypes from "prop-types";

export default function DateInput({
  icon,
  placeholder,
  name,
  value,
  event,
  style,
}) {
  return (
    <>
      <fieldset
        className={`bg-blue-50 relative set-legend-to-38acec  rounded-md my-2 ${style} h-22 flex justify-around items-center ${textBoxWrapper} ${textBoxInitial}`}
      >
        <legend className="text-gray-700 ml-2 mt-2">{placeholder}</legend>
        <span className="w-6 ml-1 text-gray-600">{icon}</span>
        <input
          name={name}
          placeholder={placeholder}
          className={`${textBoxStyle} w-full mr-1`}
          type={"date"}
          value={value}
          onChange={event}
        />
      </fieldset>
    </>
  );
}

DateInput.defaultProps = {
  name: "umarps",
  placeholder: "Umarps textbox",
  value: "",
  event: (e) => {
    console.log(e.currentTarget.value);
  },
  icon: undefined,
  style: "w-full",
};

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  icon: PropTypes.any,
  style: PropTypes.string,
};
