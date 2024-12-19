import React from "react";

const Button = ({ label, type, icon, onClick }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {icon || label}
    </button>
  );
};

export default Button;
