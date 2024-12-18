"use client";

import { numberButtons, operatorButtons } from "@/utils/constants";
import NumberButton from "@/components/NumberButton";
import OperatorButton from "@/components/OperatorButton";
import Display from "@/components/Display";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
      <div className="flex flex-col bg-gradient-to-bl from-black via-gray-800 to-black w-[400px] h-fit rounded-xl p-6 gap-6 shadow-lg shadow-black/50">
        <Display />
        <div className="flex flex-row w-full gap-4">
          <div className="w-2/3 grid grid-cols-3 gap-2">
            {numberButtons.map((button) => (
              <NumberButton key={button} button={button} />
            ))}
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            {operatorButtons.map((button) => (
              <OperatorButton key={button} button={button} />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 rounded-lg h-12 text-white">
            Clear
          </button>
          <button className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-lg h-12 text-white">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
