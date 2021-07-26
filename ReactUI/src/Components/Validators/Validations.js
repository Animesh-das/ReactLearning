import React from "react";

const required = (value) => {
  if (value.toString().trim().length < 0) return "This field is required.";
};
