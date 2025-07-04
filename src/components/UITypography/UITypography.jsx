import React from "react";
import "./styles.css";

const UITypography = ({ variant,className, text, ...props }) => {
  return (
    <>
      {variant == "h1" ? (
        <h1 className={`h1 ${className}`} {...props}>
          {text}
        </h1>
      ) : variant == "h2" ? (
        <h2 className={`h2 ${className}`} {...props}>
          {text}
        </h2>
      ) : variant == "h3" ? (
        <h3 className={`h3 ${className}`} {...props}>
          {text}
        </h3>
      ) : variant == "h4" ? (
        <h4 className={`h4 ${className}`} {...props}>
          {text}
        </h4>
      ) : variant == "h5" ? (
        <h5 className={`h5 ${className}`} {...props}>
          {text}
        </h5>
      ) : variant == "h6" ? (
        <h6 className={`h6 ${className}`} {...props}>
          {text}
        </h6>
      ) : (
        <p className={`p ${className}`} {...props}>
          {text}
        </p>
      )}
    </>
  );
};

export default UITypography;
