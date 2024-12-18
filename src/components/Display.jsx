import React from "react";

const Display = ({ expression, result }) => {
  return (
    <div className="flex flex-row w-full h-24 rounded-xl p-4 justify-end text-end items-center text-4xl font-semibold border-8 border-gray-700 relative text-base-300 bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500">
      <p className="text-sm absolute top-1 right-4">
        {expression || "Let's calculate!"}
      </p>
      <h1>{result !== null ? result : "0"}</h1>
    </div>
  );
};

export default Display;
