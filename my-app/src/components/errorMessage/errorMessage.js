import React from "react";
import img from "./error.jpg";
import './errorMessage.sass';

const ErrorMessage = () => {
  return (
    <div>
      <img className="error-img" src={img} alt="error"></img>
    </div>
  );
};

export default ErrorMessage;