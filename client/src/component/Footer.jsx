import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary text-neutral">
      <div className="container py-5 lg:py-10 flex flex-col sm:flex-row   justify-between space-x-4">
        {/* about box */}
        <div className="w-full  md:w-1/4 ">
          <Link to="/">
            <img
              className="h-auto w-[60%]"
              src="./whiteLogo.png"
              alt="Brand Icon"
            />
          </Link>
          <p className="100%">
            Welcome to TechScript your go-to source for the latest tech
            insights, trends, and tutorials. Stay ahead in the digital world
            with our concise, expert-driven content...
          </p>
          <div className="flex items-center justify-start space-x-3 mt-5">
            <Link to="/">
              <FaFacebook size={24} />
            </Link>
            <Link to="/">
              <FaLinkedin size={24} />
            </Link>
            <Link to="/">
              <FaSquareInstagram size={24} />
            </Link>
          </div>
        </div>
        {/* Recent blogs box  */}
        <div className="w-full  md:w-1/4 mt-5">
          <h2 className="text-2xl border-b-2 inline-block mb-4">Recent</h2>
          <div className="mb-3">
            <Link to="/">Game Changing Virtual Reality Console</Link>
            <div className="flex items-center space-x-1">
              <SlCalender />
              <span>10 May 2025</span>
            </div>
          </div>
          <div className="mb-3">
            <Link to="/">Game Changing Virtual Reality Console</Link>
            <div className="flex items-center space-x-1">
              <SlCalender />
              <span>25 May 2025</span>
            </div>
          </div>
        </div>
        {/* blog category  box  */}
        <div className="w-full  md:w-1/4 mt-5">
          <h2 className="text-2xl border-b-2 inline-block mb-4">Categories</h2>
          <ul className="lg:pe-22 space-y-3">
           
            <li className="">
              <Link to="/" className="flex items-center justify-between border-b-1 border-gray-300">
              <span>
                Website
              </span>
              <span>16</span>
              </Link>
                
            </li>
            <li className="">
              <Link to="/" className="flex items-center justify-between border-b-1 border-gray-300">
              <span>
                AI
              </span>
              <span>50</span>
              </Link>
                
            </li>
            <li className="">
              <Link to="/" className="flex items-center justify-between border-b-1 border-gray-300">
              <span>
                Techbology
              </span>
              <span>25</span>
              </Link>
                
            </li>
            <li className="">
              <Link to="/" className="flex items-center justify-between border-b-1 border-gray-300">
              <span>
                Degital
              </span>
              <span>35</span>
              </Link>
                
            </li>
            
          </ul>
        </div>
        {/* quick link  */}
        <div className="w-full  md:w-1/4 mt-5 ">
          <h2 className="text-2xl border-b-2 inline-block mb-4">Links</h2>{" "}
          <br />
          <div className="flex flex-col space-y-3">
            <Link to="/">Blogs</Link>
            <Link to="/">Creators</Link>
            <Link to="/">Admins</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </div>
      <div className="container pb-5 lg:pb-10">
        <hr className="pt-5" />
        <div className="flex flex-row items-center justify-center space-x-1">
          <div className="">
            <FaCopyright size={22} />
          </div>
          <p className="text-[13px]">TechScript 2025, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
