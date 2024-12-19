import { evaluate } from "mathjs";

export const validKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "-",
  "*",
  "/",
  "Enter",
  "Backspace",
];

export const isValidKey = (key) => validKeys.includes(key);

export const processKey = (key, expression, setExpression, setResult) => {
  if (key === "Enter") {
    if (expression.trim() === "") {
      setResult("0");
    }

    const calculatedResult = calculateResult(expression);
    setResult(calculatedResult);
    setExpression(calculatedResult.toString());
    return;
  }

  if (key === "Backspace") {
    setExpression((prev) => (prev.length > 0 ? prev.slice(0, -1) : ""));
    return;
  }

  setExpression((prev) => prev + key);
};

export const handleCalculation = (input, setCurrentInput) => {
  try {
    const result = evaluate(input);
    setCurrentInput(result.toString());
  } catch (error) {
    console.error(`Invalid Expression: ${error.message}`);
    setCurrentInput("Error");
  }
};

export const handleBackspace = (setCurrentInput) => {
  setCurrentInput((prev) => prev.slice(0, -1));
};

export const handleClearAll = (setCurrentInput) => {
  setCurrentInput("");
};

/**
 * Appends a value to the current expression
 * @param {string} expression
 * @param {string} value
 * @returns {string}
 */

export const appendToExpression = (expression, value) => {
  if (isValidKey(value)) {
    return expression + value;
  }
  return expression;
};

/**
 * Safely evaluates the mathematical expression
 * @param {string} expression
 * @returns {number|string}
 */

export const calculateResult = (expression) => {
  try {
    if (expression.includes("/0")) {
      return "Error";
    }

    return evaluate(expression).toString();
  } catch {
    return "Error";
  }
};

/**
 * Resets the expression and result to their initial states
 * @returns {object}
 */

export const resetCalculator = () => {
  return { expression: "", result: null };
};
