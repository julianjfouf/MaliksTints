import React, { useEffect, useState } from "react";
import Navbar from "./subcomponents/Navbar";

const Hero = ({ menu, setMenu }) => {
  return (
    <div
      id="home"
      className="h-screen w-screen flex justify-center items-center relative"
    >
      <Navbar menu={menu} setMenu={setMenu} />
      <h1 className="text-4xl md:text-9xl text-center">
        Welcome to <br />{" "}
        <span className={`font-black z-10 text-blue-800`}>Malik's Tints</span>
      </h1>
      <a
        href="#why"
        className="absolute bottom-4 h-10 w-5 rounded-full outline outline-blue-800"
      >
        <div className="w-1 h-2.5 bg-blue-800 rounded-full absolute top-1 left-[50%] translate-x-[-50%] scroll"></div>
      </a>
    </div>
  );
};

export default Hero;
