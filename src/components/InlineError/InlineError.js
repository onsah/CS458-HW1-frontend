import React from "react";
import PropTypes from "prop-types";

import "../../css/InlineError.css";

export const InlineError = ({ text, id }) => (
  <span className="inline-error-span" id={id}>
    {"  "}
    {text}!
  </span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};