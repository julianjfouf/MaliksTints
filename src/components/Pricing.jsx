import Image from "next/image";
import React from "react";
import first from "../../public/FRONT_2.png";
import second from "../../public/all_4.png";
import third from "../../public/back_2.png";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col items-center container mx-auto p-24 mt-20"
    >
      <p className="text-blue-800 text-xs md:text-xl tracking-widest text-center">
        Pricing
      </p>
      <h1 className="text-xl md:text-6xl font-bold mb-8 text-center">
        Our Offers
      </h1>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="min-w-[240px] relative flex flex-col justify-center overflow-hidden items-center border px-4 py-8 rounded m-1">
          <div className="absolute w-full top-0 h-1 bg-blue-800"></div>
          <h3 className="font-semibold md:text-4xl text-center text-blue-800">
            Two Front
          </h3>
          <Image className="my-4" src={first} />
          <p className="font-semibold md:text-4xl">$100</p>
        </div>
        <div className="min-w-[240px] relative flex flex-col justify-center overflow-hidden items-center border px-4 py-8 rounded m-1">
          <div className="absolute w-full top-0 h-1 bg-blue-800"></div>
          <h3 className="font-semibold md:text-4xl text-center text-blue-800">
            All Four
          </h3>
          <Image className="my-4" src={second} />
          <p className="font-semibold md:text-4xl">$200</p>
        </div>
        <div className="min-w-[240px] relative flex flex-col justify-center overflow-hidden items-center border px-4 py-8 rounded m-1">
          <div className="absolute w-full top-0 h-1 bg-blue-800"></div>
          <h3 className="font-semibold md:text-4xl text-center text-blue-800">
            Two Back
          </h3>
          <Image className="my-4" src={third} />
          <p className="font-semibold md:text-4xl">$100</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
