import Image from "next/image";
import React from "react";
import calendar from "../../public/calender-dynamic-premium.png";

const Booking = () => {
  return (
    <div
      id="booking"
      className="flex flex-col items-center container mx-auto p-24"
    >
      <p className="text-blue-800 text-xs md:text-xl tracking-widest">
        Booking
      </p>
      <h1 className="text-xl md:text-6xl font-bold mb-8 text-center">
        How to Book
      </h1>
      <div className="flex flex-wrap flex-col-reverse md:flex-row items-center justify-center h-full">
        <Image
          src={calendar}
          className="md:w-1/2 h-full object-contain aspect-auto"
        />
        <div className="md:w-1/2 p-8 h-full">
          <div className="flex p-4 md:p-0 min-w-[240px]">
            <p className="text-center mr-4">
              <span className="text-xs md:text-base tracking-widest text-blue-800">
                step
              </span>
              <br />
              <span className="text-xl md:text-4xl font-bold">01</span>
            </p>
            <p className="max-w-md text-sm md:text-base">
              Send us a text through your preferred media (email, text, call,
              instagram, facebook).
            </p>
          </div>
          <div className="flex md:my-8 p-4 md:p-0 min-w-[240px]">
            <p className="text-center mr-4">
              <span className="text-xs md:text-base tracking-widest text-blue-800">
                step
              </span>
              <br />
              <span className="text-xl md:text-4xl font-bold">02</span>
            </p>
            <p className="max-w-md text-sm md:text-base">
              Select which job you would like done, including the level of tint
              you want (5, 20, 35).
            </p>
          </div>
          <div className="flex p-4 md:p-0 min-w-[240px]">
            <p className="text-center mr-4">
              <span className="text-xs md:text-base tracking-widest text-blue-800">
                step
              </span>
              <br />
              <span className="text-xl md:text-4xl font-bold">03</span>
            </p>
            <p className="max-w-md text-sm md:text-base">
              Let us know the best date and time for the job to be completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
