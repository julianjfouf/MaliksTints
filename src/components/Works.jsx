import React from "react";
import Work from "./subcomponents/Work";
import image1 from "../../public/works/malik1.jpg";

const Works = () => {
  return (
    <div className="flex flex-col items-center p-24 container mx-auto">
      <p className="text-blue-800 text-xs md:text-xl tracking-widest">Works</p>
      <h1 className="text-xl md:text-6xl font-bold mb-8">Our Recent Works</h1>
      <div className="flex flex-wrap">
        <Work images={[image1]} />
      </div>
    </div>
  );
};

export default Works;
