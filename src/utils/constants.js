import { FaEquals, FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";

export const BUTTONS = [
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "/", type: "operator", icon: FaDivide },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "*", type: "operator", icon: FaTimes },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "-", type: "operator", icon: FaMinus },
  { label: "0", type: "number" },
  { label: ".", type: "number" },
  { label: "=", type: "equals", icon: FaEquals },
  { label: "+", type: "operator", icon: FaPlus },
];

export const numberButtons = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  "00",
  ".",
];

export const operatorButtons = ["+", "-", "*", "/"];
