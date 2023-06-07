import React, { useState } from "react";

const Interface = ({ setTint }) => {
  const [selected, setSelected] = useState(2);

  return (
    <div className="absolute w-full h-full top-0 cursor-auto z-10">
      <div className="absolute top-10 left-[50%] translate-x-[-50%] z-10 flex flex-col items-center justify-center">
        <p className="text-blue-800 text-xs md:text-xl tracking-widest">
          Simulator
        </p>
        <h1 className="text-xl md:text-6xl font-bold text-center">
          Window Tinting
        </h1>
        <div className="flex gap-5 mt-8 z-10">
          <button
            onClick={() => {
              setTint(0.025);
              setSelected(0);
            }}
            className={`bg-neutral-300 px-4 py-2 md:px-6 rounded text-lg md:text-xl z-10 font-semibold duration-300 transition-all ease-in-out ${
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
            className={`bg-neutral-300 px-4 py-2 md:px-6 rounded text-lg md:text-xl z-10 font-semibold duration-300 transition-all ease-in-out ${
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
            className={`bg-neutral-300 px-4 py-2 md:px-6 rounded text-lg md:text-xl z-10 font-semibold duration-300 transition-all ease-in-out ${
              selected == 2 ? `!bg-blue-800 text-neutral-50 shadow-inner` : null
            }`}
          >
            35
          </button>
        </div>
        <div className="relative mt-4 md:text-base text-xs text-center">
          <p
            className={`opacity-0 font-semibold p-2 rounded transition-all duration-300`}
          >
            <span className="font-black">43%</span> Total Solar Energy Rejection
          </p>
          <p
            className={`absolute bg-white/70 rounded p-2 font-semibold top-0 translate-y-[-100%] opacity-0 transition-all duration-300 ${
              selected == 0 ? `!translate-y-[0] opacity-100` : null
            }`}
          >
            <span className="font-black">43%</span> Total Solar Energy Rejection
          </p>
          <p
            className={`absolute bg-white/70 rounded p-2 font-semibold w-full top-0 translate-y-[-100%] opacity-0 transition-all duration-300 ${
              selected == 1 ? `!translate-y-[0] opacity-100` : null
            }`}
          >
            <span className="font-black">39%</span> Total Solar Energy Rejection
          </p>
          <p
            className={`absolute bg-white/70 rounded p-2 font-semibold top-0 translate-y-[-100%] opacity-0 transition-all duration-300 ${
              selected == 2 ? `!translate-y-[0] opacity-100` : null
            }`}
          >
            <span className="font-black">36%</span> Total Solar Energy Rejection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interface;
