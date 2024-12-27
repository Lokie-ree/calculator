import {
  FaPlus,
  FaMinus,
  FaTimes,
  FaDivide,
  FaBackspace,
} from "react-icons/fa";

import { FaPlusMinus } from "react-icons/fa6";
import { TbSquareRoot } from "react-icons/tb";
import { LuPi } from "react-icons/lu";

export const BUTTONS = [
  { label: "sin", type: "function" },
  { label: "cos", type: "function" },
  { label: "tan", type: "function" },
  { label: "rad", type: "function" },
  { label: "deg", type: "function" },
  { label: "log", type: "function" },
  { label: "ln", type: "function" },
  { label: "!", type: "function" },
  { label: "inv", type: "function" },
  { label: "CE", type: "function", icon: <FaBackspace /> },
  { label: "%", type: "operator" },
  { label: "(", type: "operator" },
  { label: ")", type: "operator" },
  { label: "", type: "operator" },
  { label: "/", type: "operator", icon: <FaDivide /> },
  { label: "^", type: "operator" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "*", type: "operator", icon: <FaTimes /> },
  { label: "√", type: "operator", icon: <TbSquareRoot /> },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "-", type: "operator", icon: <FaMinus /> },
  { label: "pi", type: "number", icon: <LuPi /> },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator", icon: <FaPlus /> },
  { label: "e", type: "number" },
  { label: "00", type: "number" },
  { label: "0", type: "number" },
  { label: ".", type: "number" },
  { label: "+/-", type: "operator", icon: <FaPlusMinus /> },
];
