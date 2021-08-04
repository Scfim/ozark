import React from "react";
import { buttonInitStyle } from "../styles/Buttons.module.css";
import PropTypes from "prop-types";

function Button({ children, event, design }) {
  return (
    <button
      onClick={event}
      className={`${buttonInitStyle} ${design} rounded-md`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  event: (e) => {
    console.log(e.currentTarget);
  },
  design: "",
  children: <i>Umarps</i>,
};

Button.propTypes = {
  children: PropTypes.any,
  event: PropTypes.func,
  design: PropTypes.string,
};

export default Button;
