import { evaluate } from "mathjs";

/**
 * Appends a value to the current expression
 * @param {string} currentExpression
 * @param {string} value
 * @returns {string}
 */

export const appendToExpression = (currentExpression, value) => {
  return currentExpression + value;
};

/**
 * Safely evaluates the mathematical expression
 * @param {string} expression
 * @returns {number|string}
 */

export const calculateResult = (expression) => {
  try {
    return evaluate(expression);
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
