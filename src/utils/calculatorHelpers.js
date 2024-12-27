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
  switch (key) {
    case "Enter":
      const calculatedResult = calculateResult(expression);
      setResult(calculatedResult);
      setExpression(expression);
      brak;

    case "Backspace":
      setExpression((prev) => (prev.length > 0 ? prev.slice(0, -1) : ""));
      break;

    case "+/-":
      setExpression((prev) => toggleSign(prev));
      break;

    default:
      setExpression((prev) => prev + key);
      break;
  }
};

export const handleCalculation = (expression, setExpression, setResult) => {
  const calculatedResult = calculateResult(expression);
  setResult(calculatedResult);
  setExpression(expression);
};

export const handleClearAll = (setExpression, setResult) => {
  const { expression, result } = resetCalculator();
  setExpression(expression);
  setResult(result);
};

export const appendToExpression = (expression, value) => {
  if (value === "+/-") {
    return toggleSign(expression);
  }

  if (isValidKey(value)) {
    return expression + value;
  }
  return expression;
};

export const toggleSign = (expression) => {
  try {
    const lastNumberMatch = /(-?\d+\.?\d*)$/.exec(expression);
    if (!lastNumberMatch) return expression;

    const [lastNumber] = lastNumberMatch;
    const toggled = lastNumber.startsWith("-")
      ? lastNumber.slice(1)
      : `-${lastNumber}`;

    return expression.slice(0, -lastNumber.length) + toggled;
  } catch (error) {
    return expression;
  }
};

let cache = {};

export const calculateResult = (expression) => {
  if (cache[expression]) {
    return cache[expression];
  }

  try {
    if (expression.includes("/0")) {
      return "Error";
    }
    const result = evaluate(expression).toString();
    cache[expression] = result;
    return result;
  } catch (error) {
    return "Error";
  }
};

export const clearCache = () => {
  cache = {};
};

export const resetCalculator = () => {
  return { expression: "", result: null };
};
