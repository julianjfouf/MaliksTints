import Image from "next/image";
import React, { useState } from "react";

const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="fixed top-0 w-screen border-b z-[1000] bg-neutral-50/70 backdrop-blur-2xl">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="max-h-[80px] overflow-hidden flex items-center">
          <Image
            src="/malikslogo.png"
            height={1024}
            width={1024}
            className="aspect-auto flex w-3/4 object-center"
          ></Image>
        </div>
        <ul className="hidden md:flex gap-4">
          <li>
            <a
              href="#why"
              className="hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              Why?
            </a>
          </li>
          <li>
            <a
              href="#simulator"
              className="hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              Simulator
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#booking"
              className="hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          onClick={() => setMenu(!menu)}
          className={`group z-10 flex md:hidden flex-col justify-center items-center cursor-pointer transition-all duration-300 ease-in-out ${
            menu ? `z-10` : null
          }`}
        >
          <div
            className={`h-0.5 w-5 bg-neutral-900 transition-all duration-300 ease-in-out z-10 ${
              menu
                ? `group-hover:rotate-[315deg] rotate-[135deg] translate-y-[6px] !bg-neutral-50 z-10`
                : `group-hover:rotate-[180deg] group-hover:translate-y-[6px]`
            }`}
          ></div>
          <div
            className={`h-0.5 my-1 w-5 bg-neutral-900 transition-all duration-300 ease-in-out z-10 ${
              menu
                ? `opacity-0`
                : `group-hover:opacity-0 group-hover:rotate-[360deg]`
            }`}
          ></div>
          <div
            className={`h-0.5 w-5 bg-neutral-900 transition-all duration-300 ease-in-out z-10 ${
              menu
                ? `group-hover:rotate-[225deg] rotate-[45deg] translate-y-[-6px] !bg-neutral-50 z-10`
                : `group-hover:rotate-[90deg] group-hover:translate-y-[-6px]`
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`h-screen flex justify-center text-neutral-50 flex-col items-center w-screen absolute top-0 left-0 bg-black duration-500 transition-all ease-in-out ${
          menu ? `translate-y-[0px]` : `translate-y-[-100%]`
        }`}
      >
        <div className="flex flex-col gap-10 text-4xl">
          <a
            href="#why"
            onClick={() => setMenu(false)}
            className="cursor-pointer text-blue-800"
          >
            01 <span className="font-bold text-neutral-50">Why?</span>
          </a>
          <a
            href="#simulator"
            onClick={() => setMenu(false)}
            className="cursor-pointer text-blue-800"
          >
            02 <span className="font-bold text-neutral-50">Simulator</span>
          </a>
          <a
            href="#pricing"
            onClick={() => setMenu(false)}
            className="cursor-pointer text-blue-800"
          >
            03 <span className="font-bold text-neutral-50">Pricing</span>
          </a>
          <a
            href="#booking"
            onClick={() => setMenu(false)}
            className="cursor-pointer text-blue-800"
          >
            04 <span className="font-bold text-neutral-50">Booking</span>
          </a>
          <a
            href="#footer"
            onClick={() => setMenu(false)}
            className="cursor-pointer text-blue-800"
          >
            05 <span className="font-bold text-neutral-50">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
