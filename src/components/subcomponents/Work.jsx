import Image from "next/image";
import React from "react";

const Work = ({ images }) => {
  return (
    <div className="flex flex-wrap h-full justify-start">
      {images.map((image) => (
        <a href="">
          <Image
            src={image}
            className="sm:w-1/3 md:w-1/4 lg:w-1/5 h-full object-contain aspect-auto hover:brightness-75 duration-300 transition-all"
          />
        </a>
      ))}
    </div>
  );
};

export default Work;
