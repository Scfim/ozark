import React from "react";
import PropTypes from "prop-types"

export default function Checkbox({ name, label, checked, event }) {
  return (
    <div onChange={event} className="w-full flex h-10 items-center">
      <input type="checkbox" checked={checked} id={name} className="mr-3 h-5 w-5" name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

Checkbox.defaultProps = {
  name: "checkboxSCFIM",
  label: "This is a checkbox label",
  checked : true,
  event : ()=>{}
};

Checkbox.propTypes = {
    name : PropTypes.string.required,
    label : PropTypes.string.required,
    label : PropTypes.bool,
    event : PropTypes.func,
}