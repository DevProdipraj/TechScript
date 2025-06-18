import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll handler for hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down and past 50px - hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`bg-neutral  fixed top-0 left-0 right-0 z-40 shadow-lg transition-transform duration-300 m ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container py-4  flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                className="h-auto w-[75%]"
                src="./logo.png"
                alt="Brand Icon"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center sm:gap-2 md:gap-4 lg:gap-10">
              <li>
                <Link
                  to="/"
                  className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
                >
                  Home
                </Link>
              </li>

              {/* Blog Dropdown (Desktop) */}
              <li className="relative group">
                <div className="flex items-center justify-evenly">
                  <span className="cursor-pointer text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500">
                    Blog
                  </span>
                  <span>
                    <MdArrowDropDown className="text-2xl" />
                  </span>
                </div>
                <ul className="absolute left-0 top-full bg-neutral shadow-md rounded-md py-2 mt-2 min-w-[150px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 font-bold">
                  <li>
                    <Link
                      to="/technology"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ai"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      AI
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/digital"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/website"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Website
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/allcreators"
                  className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
                >
                  Creators
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Login/Register */}
          <div className="hidden md:block ms-2">
            <div className="flex items-center justify-center space-x-2">
              <Link to="/login">
                <button className="py-1.5 rounded-md text-md bg-primary w-[90px] text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="py-1.5 rounded-md text-md bg-primary w-[90px] text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover">
                  Register
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
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
              className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={() => setIsOpen(false)}
        className={`bg-gray-300 h-screen w-[60%] sm:w-[40%] md:hidden top-0 fixed px-8 pt-10 transition-transform duration-500 ease-in-out transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="">
          <li className="mb-4">
            <Link to="/">
              <img
                className="h-auto w-[100%]"
                src="./logo.png"
                alt="Brand Icon"
              />
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/"
              className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
            >
              Home
            </Link>
          </li>

          {/* Blog Dropdown (Mobile) */}
          <li className="my-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowMobileDropdown(!showMobileDropdown);
              }}
              className="flex justify-between items-center text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500 cursor-pointer"
            >
              Blog
              <span>
                {showMobileDropdown ? (
                  <IoMdRemove className="text-2xl text-secondary ml-2" />
                ) : (
                  <IoMdAdd className="text-2xl text-secondary ml-2" />
                )}
              </span>
            </div>
            {showMobileDropdown && (
              <ul className="ml-4 mt-2 space-y-2 font-bold">
                <li className="my-2">
                  <Link
                    to="/technology"
                    className="block hover:text-primary-hover"
                  >
                    Technology
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/ai"
                    className="block hover:text-primary-hover"
                  >
                    AI
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/digital"
                    className="block hover:text-primary-hover"
                  >
                    Digital
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/website"
                    className="block hover:text-primary-hover"
                  >
                    Website
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="my-2">
            <Link
              to="/allcreators"
              className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
            >
              Creators
            </Link>
          </li>
          <li className="my-2 ">
            <Link
              to="/about"
              className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
            >
              About
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/contact"
              className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
            >
              Contact
            </Link>
          </li>
          <Link to="/login">
            <button className="text-neutral font-semibold bg-primary py-1 px-6 rounded-full text-md hover:bg-gray-300 cursor-pointer transition-all duration-400 my-3">
              Login
            </button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
