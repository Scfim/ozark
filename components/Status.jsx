import React, { useEffect } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Status({
  type = "",
  message = "",
  isHidden,
  resetStatusIsHidden,
}) {

  useEffect(() => {
    const timeout = setTimeout(() => resetStatusIsHidden(), 5000);
    return () => clearTimeout(timeout, 5000);
  }, [isHidden]);
  const error = "bg-red-200 text-red-600",
    success = "bg-green-200 text-green-600 ";
  return (
    <div
      className={`w-3/12 shadow-lg z-30 __status absolute bottom-10 left-2 ${
        isHidden ? "hidden" : "flex"
      } flex-col p-2 ${
        type === "error" ? error : type === "success" ? success : null
      } rounded`}
    >
      <div className="flex w-full justify-end p-2 my-1">
        <FaTimes
          className="cursor-pointer"
          onClick={() => resetStatusIsHidden()}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center mx-2">
        {message}
        {type === "error" ? (
          <FaExclamationTriangle size="2.5rem" />
        ) : type === "success" ? (
          <FaCheckCircle size="2.5rem" />
        ) : null}
      </div>
    </div>
  );
}
Status.defaultProps = {
  type: "Status type",
  message: "Status message",
  isHidden: true,
  resetStatusIsHidden: () => {},
};

Status.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
  resetStatusIsHidden: PropTypes.func,
  getRef : PropTypes.func
};
