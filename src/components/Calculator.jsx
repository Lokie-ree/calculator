"use client";

import { useState, useEffect } from "react";
import Display from "./Display";
import Button from "./Button";
import { BUTTONS } from "@/utils/buttons";
import {
  appendToExpression,
  resetCalculator,
  calculateResult,
  isValidKey,
  processKey,
  handleClearAll,
  handleCalculation as utilityHandleCalculation,
} from "@/utils/calculatorHelpers";
import { FaEquals } from "react-icons/fa";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (isValidKey(key)) {
        processKey(key, expression, setExpression, setResult);
      } else {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expression]);

  const handleButtonClick = (value) => {
    if (value === "=") {
      processKey("Enter", expression, setExpression, setResult);
    } else {
      setExpression((prev) => appendToExpression(prev, value));
    }
  };

  const handleClear = () => {
    handleClearAll(setExpression, setResult);
  };

  const handleCalculation = () => {
    utilityHandleCalculation(expression, setExpression, setResult);
  };

  return (
    <div className="flex flex-col bg-gradient-to-bl from-black via-gray-800 to-black w-[400px] h-fit rounded-xl p-6 gap-6 shadow-lg shadow-black/50">
      <Display expression={expression} result={result} />
      <div className="grid grid-cols-4 gap-2">
        {BUTTONS.map((button) => (
          <Button
            key={button.label}
            label={button.label}
            icon={button.icon}
            onClick={() => handleButtonClick(button.label)}
            type={button.type}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4">
        <button
          onClick={handleClear}
          className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-red-600 via-red-500 to-red-600 rounded-lg h-12 text-white"
        >
          Clear
        </button>
        <button
          onClick={handleCalculation}
          className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 rounded-lg h-12 text-white"
        >
          <FaEquals />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
