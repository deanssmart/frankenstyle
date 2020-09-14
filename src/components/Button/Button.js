import React from "react";

const Button = ({ children, handleSubmit }) => {
  return (
    <button onClick={handleSubmit} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
