import Image from "next/image";
import React from "react";
import shield from "../../public/sheild-dynamic-premium.png";
import sun from "../../public/sun-dynamic-premium.png";
import clock from "../../public/clock-dynamic-premium.png";

const Why = () => {
  return (
    <div id="why" className="flex flex-col items-center container mx-auto p-24">
      <p className="text-blue-800 text-xs md:text-xl tracking-widest">Why?</p>
      <h1 className="text-xl text-center md:text-6xl font-bold mb-8">
        Benefits of Tint
      </h1>
      <div className="flex md:flex-nowrap flex-wrap">
        <div className="min-w-[240px] flex flex-col justify-center items-center border p-4 m-1 rounded">
          <h3 className="md:text-2xl text-blue-800 mb-2 text-center font-bold">
            Privacy
          </h3>
          <p className="max-w-sm md:text-base text-xs text-center mb-4">
            Your right to privacy will be protected from the eyes of others with
            a sufficient window tint to block out a view of the inside.
          </p>
          <Image src={shield} />
        </div>
        <div className="min-w-[240px] flex flex-col justify-center items-center border p-4 m-1 rounded">
          <h3 className="md:text-2xl text-blue-800 mb-2 text-center font-bold">
            Sun + Heat Resistant
          </h3>
          <p className="max-w-sm md:text-base text-xs mb-4 text-center">
            UV light and sun exposure will be significantly reduced with a more
            tinted window which prevents your car getting hot.
          </p>
          <Image src={sun} />
        </div>
        <div className="min-w-[240px] flex flex-col justify-center items-center border p-4 m-1 rounded">
          <h3 className="md:text-2xl text-blue-800 mb-2 text-center font-bold">
            Car Interior Quality
          </h3>
          <p className="max-w-sm md:text-base text-xs text-center mb-4">
            With 99% UV rejection, the interior will last
            longer and won't deteriorate as much due to excessive sun rays and
            heat damage.
          </p>
          <Image src={clock} className="aspect-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Why;
