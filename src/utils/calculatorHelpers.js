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
      setExpression("");
      break;

    case "Backspace":
      setExpression((prev) => (prev.length > 0 ? prev.slice(0, -1) : ""));
      break;

    default:
      setExpression((prev) => prev + key);
      break;
  }
};

export const handleCalculation = (expression, setExpression, setResult) => {
  const calculatedResult = calculateResult(expression);
  setResult(calculatedResult);
  setExpression("");
};

export const handleClearAll = (setExpression, setResult) => {
  const { expression, result } = resetCalculator();
  setExpression(expression);
  setResult(result);
};

export const appendToExpression = (expression, value) => {
  if (isValidKey(value)) {
    return expression + value;
  }
  return expression;
};

export const calculateResult = (expression) => {
  try {
    if (expression.includes("/0")) {
      return "Error";
    }
    return evaluate(expression).toString();
  } catch (error) {
    return "Error";
  }
};

export const resetCalculator = () => {
  return { expression: "", result: null };
};
