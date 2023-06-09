import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="border-t container mx-auto py-12 px-4 flex justify-between items-start"
    >
      <div className="relative flex flex-col-reverse md:flex-row justify-center w-full h-full">
        <div className="md:absolute md:left-0 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="font-black md:text-2xl">Malik's Tints</h1>
          <p className="text-xs md:text-base">
            &copy; 2023 Malik's Tints <br />
            <span className="text-xs md:text-sm">
              Powered by{" "}
              <a
                className="text-purple-500 underline hover:text-purple-700 duration-300 transition-all ease-in-out"
                href="https://julianjfoufportfolio.vercel.app/"
                target="_blank"
              >
                Julian Jfouf
              </a>
            </span>
          </p>
        </div>
        <div className="text-center md:flex md:flex-col hidden">
          <h3 className="font-semibold md:text-xl text-blue-800">Navigation</h3>
          <div className="flex flex-col gap-2 mt-4">
            <a
              href="#home"
              className="hover:text-blue-800 text-sm md:text-base transition-all duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#why"
              className="hover:text-blue-800 text-sm md:text-base transition-all duration-300 ease-in-out"
            >
              Why?
            </a>
            <a
              href="#simulator"
              className="hover:text-blue-800 text-sm md:text-base transition-all duration-300 ease-in-out"
            >
              Simulator
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-800 text-sm md:text-base transition-all duration-300 ease-in-out"
            >
              Pricing
            </a>
            <a
              href="#booking"
              className="hover:text-blue-800 text-sm md:text-base transition-all duration-300 ease-in-out"
            >
              About
            </a>
          </div>
        </div>
        <div className="md:absolute right-0 text-center md:text-right mb-8 md:mb-0">
          <h3 className="font-semibold md:text-xl text-blue-800">Contact</h3>
          <div className="flex flex-col gap-2 mt-4">
            <a
              href="mailto:maliktints@gmail.com"
              className="flex items-center gap-1 justify-center md:justify-end text-sm md:text-base hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              maliktints@gmail.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="1 1 600 600"
              >
                <g transform="matrix(6.66667 0 0 6.66667 -5.667 -6408.081)">
                  <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="-110.934"
                    y1="1129.751"
                    x2="-110.35"
                    y2="1720.099"
                    gradientTransform="matrix(1 0 0 -1 156.89 2180.75)"
                  >
                    <stop offset="0" stop-color="#70efff" />
                    <stop offset="1" stop-color="#5770ff" />
                  </linearGradient>
                  <path
                    d="M21.653 961.362h48.695a20.608 20.608 0 0 1 20.653 20.653v48.695a20.608 20.608 0 0 1-20.653 20.653H21.653A20.608 20.608 0 0 1 1 1030.71v-48.695a20.608 20.608 0 0 1 20.653-20.653z"
                    fill="url(#a)"
                  />
                  <path
                    d="M20.719 986.956c-.474 0-.921.082-1.344.25l8.469 8.719 8.563 8.875.156.188.25.25.25.25.5.531 7.344 7.531c.122.076.477.404.754.543.357.178.743.343 1.141.357.43.015.869-.108 1.256-.296.29-.141.419-.343.755-.603l8.5-8.781 8.594-8.844 8.281-8.531a3.635 3.635 0 0 0-1.75-.438H20.719zm-2.594 1.062c-.903.856-1.469 2.142-1.469 3.594v28.625c0 1.175.377 2.243 1 3.062l1.187-1.125 8.844-8.594 7.844-7.594-.156-.187-8.594-8.844-8.594-8.875-.062-.062zm57.188.282l-8.375 8.656-8.563 8.844-.156.156 8.156 7.906 8.844 8.594.531.5c.476-.764.75-1.705.75-2.719v-28.625c0-1.294-.448-2.468-1.187-3.312zm-38.782 18.718l-7.812 7.594-8.875 8.594-1.125 1.094c.593.382 1.268.625 2 .625h51.719c.88 0 1.678-.338 2.344-.875l-.562-.562-8.875-8.594-8.156-7.875-7.344 7.562c-.397.264-.663.556-1.051.735-.625.289-1.309.533-1.997.523-.69-.011-1.367-.281-1.986-.585-.311-.153-.477-.305-.841-.61l-7.439-7.626z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
            <a
              href="sms:+15106438393"
              className="flex items-center gap-1 text-sm md:text-base justify-center md:justify-end hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              (510) 643-8393
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 64 64"
              >
                <g transform="translate(5.796 8.927)">
                  <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="-1183.897"
                    y1="1855.346"
                    x2="-1119.897"
                    y2="1855.346"
                    gradientTransform="matrix(0 1 1 0 -1829.142 1174.97)"
                  >
                    <stop offset="0" stop-color="#00ea66" />
                    <stop offset="1" stop-color="#00d50f" />
                  </linearGradient>
                  <path
                    d="M58.204 6.073v34c0 8.284-6.716 15-15 15h-34c-8.284 0-15-6.716-15-15v-34c0-8.284 6.716-15 15-15h34c8.284 0 15 6.716 15 15z"
                    fill="url(#a)"
                  />
                  <g transform="translate(-10.184 -993.295)">
                    <linearGradient
                      id="b"
                      gradientUnits="userSpaceOnUse"
                      x1="-904.919"
                      y1="1071.927"
                      x2="-904.919"
                      y2="1092.493"
                      gradientTransform="matrix(.794 0 0 -.8101 754.868 1899.425)"
                    >
                      <stop offset="0" stop-color="#e5f5d9" />
                      <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                    <path
                      d="M36.4 1001.368c-3.512 0-6.761.908-9.47 2.473-.459.265-.91.531-1.335.832-.41.292-.786.611-1.162.934-.014.011-.036.013-.05.025-3.076 2.637-4.995 6.271-4.995 10.294 0 3.965 1.874 7.541 4.872 10.167.014.107.024.223.024.303 0 2.322-1.786 4.214-4.055 4.239a9.41 9.41 0 0 0 3.61.731c2.19 0 4.163-.814 5.762-2.094a19.415 19.415 0 0 0 6.8 1.236c9.388 0 16.988-6.535 16.988-14.583s-7.601-14.557-16.989-14.557z"
                      fill="url(#b)"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="sms:+15106438393"
              className="flex items-center gap-1 text-sm md:text-base justify-center md:justify-end hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              @MaliksTints
              <svg
                height="25"
                viewBox="126.445 2.281 589 589"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="420.945" cy="296.781" fill="#3c5a9a" r="294.5" />
                <path
                  d="m516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357h-44.788v71.271h46.174v205.177h84.847v-206.531h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0v-70.403z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
