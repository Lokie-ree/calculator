import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";

import { FaPlusMinus } from "react-icons/fa6";

export const BUTTONS = [
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "/", type: "operator", icon: <FaDivide /> },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "*", type: "operator", icon: <FaTimes /> },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "-", type: "operator", icon: <FaMinus /> },
  { label: ".", type: "number" },
  { label: "0", type: "number" },
  { label: "+/-", type: "operator", icon: <FaPlusMinus /> },
  { label: "+", type: "operator", icon: <FaPlus /> },
];
