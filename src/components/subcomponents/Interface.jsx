import React, { useState } from "react";

const Interface = ({ setTint }) => {
  const [selected, setSelected] = useState(2);

  return (
    <div className="absolute w-full top-0 cursor-auto">
      <div className="absolute top-10 left-[50%] translate-x-[-50%] z-10 flex flex-col items-center justify-center">
        <p className="text-blue-800 text-xs md:text-xl tracking-widest">Simulator</p>
        <h1 className="text-xl md:text-6xl font-bold text-center">Window Tinting</h1>
        <div className="flex gap-5 mt-8 z-10">
          <button
            onClick={() => {
              setTint(0.025);
              setSelected(0);
            }}
            className={`bg-neutral-300 px-4 py-2 md:px-8 md:py-4 rounded text-lg md:text-2xl z-10 font-semibold duration-300 transition-all ease-in-out ${
              selected == 0 ? `!bg-blue-800 text-neutral-50 shadow-inner` : null
            }`}
          >
            05
          </button>
          <button
            onClick={() => {
              setTint(0.1);
              setSelected(1);
            }}
            className={`bg-neutral-300 px-4 py-2 md:px-8 md:py-4 rounded text-lg md:text-2xl z-10 font-semibold duration-300 transition-all ease-in-out ${
              selected == 1 ? `!bg-blue-800 text-neutral-50 shadow-inner` : null
            }`}
          >
            20
          </button>
          <button
            onClick={() => {
              setTint(0.2);
              setSelected(2);
            }}
            className={`bg-neutral-300 px-4 py-2 md:px-6 md:py-3 rounded text-lg md:text-2xl z-10 font-semibold duration-300 transition-all ease-in-out ${
              selected == 2 ? `!bg-blue-800 text-neutral-50 shadow-inner` : null
            }`}
          >
            35
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interface;
