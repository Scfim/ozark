import React, { useState } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Status({ type, message, isHidden }) {
  const [isStatusHidden, setIsStatusHidden] = useState(isHidden);
  const error = "bg-green-100 text-green-500",
    success = "bg-red-100 text-red-500";
  return (
    <div
      className={`w-full ${isStatusHidden ? "hidden" : "flex"} flex-col p-2 ${
        type === "error" ? error : type === "success" ? success : null
      } rounded`}
    >
      <div className="flex w-full justify-end p-2 my-1">
        <FaTimes onClick={() => setIsStatusHidden(true)} />
      </div>
      <div className="flex w-full justify-between mx-2">
        {message}
        {type === "error" ? (
          <FaExclamationTriangle />
        ) : type === "success" ? (
          <FaCheckCircle />
        ) : null}
      </div>
    </div>
  );
}
Status.defaultProps = {
  type: "Status type",
  message: "Status message",
  isHidden: false
};

Status.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isHidden: PropTypes.bool
};
