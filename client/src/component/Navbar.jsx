import React, { useState } from "react";
 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-neutral text-primary">
        <div className="container py-4 flex items-center justify-between ">
          <div className="">
            <img src='./logo.png' alt="Brand Icon" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center sm:gap-2 md:gap-4 lg:gap-10">
              <li>
                <a
                  className="text-xl font-semibold text-primary hover:underline hover:text-secondary-hover underline-offset-6 transition-all duration-400"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-xl font-semibold text-primary hover:underline hover:text-secondary-hover underline-offset-6 transition-all duration-400"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-xl font-semibold text-primary hover:underline hover:text-secondary-hover underline-offset-6 transition-all duration-400"
                  href="#"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="text-xl font-semibold text-primary hover:underline hover:text-secondary-hover underline-offset-6 transition-all duration-400"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-xl font-semibold text-primary hover:underline hover:text-secondary-hover underline-offset-6 transition-all duration-400"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-xl font-semibold text-primary hover:underline hover:text-secondary-hover underline-offset-6 transition-all duration-400"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <button className="text-black font-semibold bg-white py-2 px-6 rounded-full text-xl hover:bg-gray-300 cursor-pointer transition-all duration-400">
              Login
            </button>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all  ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gray-300 h-screen w-[60%] sm:w-[40%] md:hidden top-0 fixed px-8 pt-10 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul>
          <li className="py-2">
            <a href="#">Home</a>
          </li>
          <li className="py-2">
            <a href="#">Services</a>
          </li>
          <li className="py-2">
            <a href="#">Project</a>
          </li>
          <li className="py-2">
            <a href="#">About</a>
          </li>
          <li className="py-2">
            <a href="#">Blog</a>
          </li>
          <li className="py-2">
            <a href="#">Contact</a>
          </li>
          <a href="#">
            <button className="text-white font-semibold bg-cyan-600 py-1 px-6 rounded-full text-xl hover:bg-gray-300 cursor-pointer transition-all duration-400 my-3">
              Login
            </button>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
