import React, { memo } from "react";

const Button = memo(({ label, type, icon, onClick }) => {
  const colorClasses = {
    number:
      "bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 hover:from-gray-500",
    operator:
      "bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600 hover:from-orange-500",
    function:
      "bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center h-12 w-12 rounded-full text-white ${
        colorClasses[type] || "bg-gray-500"
      }`}
    >
      {icon || label}
    </button>
  );
});

export default Button;
