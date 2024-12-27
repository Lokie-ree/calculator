import React, { memo } from "react";

const Button = memo(({ label, type, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center h-12 rounded-lg text-white ${
        type === "operator"
          ? "bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500"
          : "bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 hover:from-gray-500"
      }`}
    >
      {icon || label}
    </button>
  );
});

export default Button;
