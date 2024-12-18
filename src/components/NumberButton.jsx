import React from "react";

const NumberButton = ({ button, onClick }) => {
  return (
    <button
      onClick={() => onClick(button)}
      className="hover:scale-105 active:scale-100 h-12 min-w-1/3 flex items-center justify-center text-white text-4xl hover:bg-gradient-to-br bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-xl"
    >
      {button}
    </button>
  );
};

export default NumberButton;
