"use client";

import { useState, useEffect, useCallback } from "react";
import Display from "./Display";
import Button from "./Button";
import { BUTTONS } from "@/utils/buttons";
import {
  appendToExpression,
  isValidKey,
  processKey,
  clearCache,
  handleClearAll,
  handleCalculation as utilityHandleCalculation,
  handleClearEntry,
  handlePercentage,
  handleTrigonometricFunction,
  handleLogarithmicFunction,
} from "@/utils/calculatorHelpers";
import { FaEquals } from "react-icons/fa";
import debounce from "lodash.debounce";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const debouncedAppendToExpression = useCallback(
    debounce((value) => {
      setExpression((prev) => appendToExpression(prev, value));
    }, 200),
    []
  );

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
    } else if (value === "CE") {
      setExpression((prev) => handleClearEntry(prev));
    } else if (value === "%") {
      setExpression((prev) => handlePercentage(prev));
    } else if (["sin", "cos", "tan"].includes(value)) {
      setExpression((prev) => handleTrigonometricFunction(value, prev));
    } else if (["log", "ln"].includes(value)) {
      setExpression((prev) => handleLogarithmicFunction(value, prev));
    } else {
      debouncedAppendToExpression(value);
    }
  };

  const handleClear = () => {
    handleClearAll(setExpression, setResult);
    clearCache();
  };

  const handleCalculation = () => {
    utilityHandleCalculation(expression, setExpression, setResult);
  };

  useEffect(() => {
    return () => {
      debouncedAppendToExpression.cancel();
    };
  }, [debouncedAppendToExpression]);

  return (
    <div className="flex flex-col bg-gradient-to-bl from-black via-gray-800 to-black w-[350px] h-fit rounded-xl p-6 gap-6 shadow-lg shadow-black/50">
      <Display expression={expression} result={result} />
      <div className="grid grid-cols-5 gap-2">
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
          AC
        </button>
        <button
          onClick={handleCalculation}
          className="w-1/2 hover:scale-105 flex justify-center items-center active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-green-600 via-green-500 to-green-600 rounded-lg h-12 text-white"
        >
          <FaEquals />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
