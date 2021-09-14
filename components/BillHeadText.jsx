import React from "react";
import PropTypes from "prop-types";

export default function BillHeadText({ value, classes }) {
  return <div className={classes}>{value}</div>;
}

BillHeadText.defaultProps = {
  classes: "",
  value: "Lorem ipsum dolor",
};
BillHeadText.propTypes = {
  classes: PropTypes.string,
  value: PropTypes.string,
};
