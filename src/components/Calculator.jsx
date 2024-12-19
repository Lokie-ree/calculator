import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import { BUTTONS } from "@/utils/constants";
import {
  appendToExpression,
  resetCalculator,
  calculateResult,
} from "@/utils/functions";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setExpression((prev) => appendToExpression(prev, value));
  };

  const handleCalculation = () => {
    const calculationResult = calculateResult(expression);
    setResult(calculationResult);
  };

  const handleClear = () => {
    const { expression: resetExpression, result: resetResult } =
      resetCalculator();
    setExpression(resetExpression);
    setResult(resetResult);
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
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
