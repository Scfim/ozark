import React from "react";
import {
  textBoxStyle,
  textBoxWrapper,
  textBoxInitial,
} from "../styles/TextBoxes.module.css";
import PropTypes from "prop-types";

function TextBox({ type, icon, placeholder, name, value, event, style }) {
  return (
    <>
      <div
        className={`bg-blue-50  rounded-md my-2 ${style} h-22 flex justify-around items-center ${textBoxWrapper} ${textBoxInitial}`}
      >
        <span className="w-6 ml-1 text-gray-600">{icon}</span>
        <input
          name={name}
          placeholder={placeholder}
          className={`${textBoxStyle} w-full mr-1`}
          type={type}
          value={value}
          onChange={event}
          data-type={type}
        />
      </div>
    </>
  );
}

TextBox.defaultProps = {
  name: "umarps",
  placeholder: "Umarps textbox",
  type: "text",
  value: "",
  event: (e) => {
    console.log(e.currentTarget.value);
  },
  icon: undefined,
  style:"w-full"
};

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  icon: PropTypes.any,
  style:PropTypes.string
};

export default TextBox;
