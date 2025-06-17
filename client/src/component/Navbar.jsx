// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // const { blogs } = useAuth();
//   // console.log(blogs);

//   return (
//     <>
//       <div className="bg-neutral sticky top-0  z-40  shadow-lg ">
//         <div className="container py-4 flex items-center justify-between ">
//           <div className="">
//             <Link to="/">
//               <img
//                 className="h-auto w-[75%]"
//                 src="./logo.png"
//                 alt="Brand Icon"
//               />
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <ul className="flex items-center sm:gap-2 md:gap-4 lg:gap-10">
//               <li>
//                 <Link
//                   to=""
//                   className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//                   href="#"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="blog"
//                   className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//                   href="#"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="creators"
//                   className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//                   href="#"
//                 >
//                   Creators
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="about"
//                   className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//                   href="#"
//                 >
//                   About
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//                   href="#"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="hidden md:block ms-2">
//             <div className="flex items-center justify-center space-x-2">
//             <Link to="/login">
//               <button className="  py-1.5 rounded-md text-md bg-primary w-[90px] text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover">
//                 Login
//               </button>
//             </Link>
//             <Link to="/register">
//               <button className=" py-1.5 rounded-md text-md bg-primary w-[90px] text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover">
//                 Register
//               </button>
//             </Link>
//             </div>
//           </div>
//           <div
//             className="md:hidden cursor-pointer"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div
//               className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all ${
//                 isOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></div>
//             <div
//               className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></div>
//             <div
//               className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all  ${
//                 isOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className={`bg-gray-300 h-screen w-[60%] sm:w-[40%] md:hidden top-0 fixed px-8 pt-10 transition-transform duration-500 ease-in-out transform z-50 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <ul className="">
//           <li>
//              <Link to="/">
//               <img
//                 className="h-auto w-[100%]"
//                 src="./logo.png"
//                 alt="Brand Icon"
//               />
//             </Link>
//           </li>
//           <li>
//             <Link
//               to=""
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//               href="#"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="blog"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//               href="#"
//             >
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="creators"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//               href="#"
//             >
//               Creators
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="about"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//               href="#"
//             >
//               About
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="/contact"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//               href="#"
//             >
//               Contact
//             </Link>
//           </li>
//           <Link to="/login" href="#">
//             <button className="text-neutral font-semibold bg-primary py-1 px-6 rounded-full text-md hover:bg-gray-300 cursor-pointer transition-all duration-400 my-3">
//               Login
//             </button>
//           </Link>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  return (
    <>
      <div className="bg-neutral sticky top-0 z-40 shadow-lg">
        <div className="container py-4 flex items-center justify-between">
          <div>
            <Link to="/">
              <img className="h-auto w-[75%]" src="./logo.png" alt="Brand Icon" />
            </Link>
          </div>
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
                <span className="cursor-pointer text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500">
                  Blog
                </span>
                <ul className="absolute left-0 top-full bg-white shadow-md rounded-md py-2 mt-2 min-w-[150px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <li>
                    <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">All Blogs</Link>
                  </li>
                  <li>
                    <Link to="/blog/ai" className="block px-4 py-2 hover:bg-gray-100">AI</Link>
                  </li>
                  <li>
                    <Link to="/blog/technology" className="block px-4 py-2 hover:bg-gray-100">Technology</Link>
                  </li>
                  <li>
                    <Link to="/blog/website" className="block px-4 py-2 hover:bg-gray-100">Website</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/creators"
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
          <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gray-300 h-screen w-[60%] sm:w-[40%] md:hidden top-0 fixed px-8 pt-10 transition-transform duration-500 ease-in-out transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul>
          <li>
            <Link to="/">
              <img className="h-auto w-[100%]" src="./logo.png" alt="Brand Icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
            >
              Home
            </Link>
          </li>

          {/* Blog Dropdown (Mobile) */}
          <li>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowMobileDropdown(!showMobileDropdown);
              }}
              className="flex justify-between items-center text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500 cursor-pointer"
            >
              Blog
              <span>{showMobileDropdown ? "▲" : "▼"}</span>
            </div>
            {showMobileDropdown && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link to="/blog" className="block hover:text-primary-hover">All Blogs</Link>
                </li>
                <li>
                  <Link to="/blog/ai" className="block hover:text-primary-hover">AI</Link>
                </li>
                <li>
                  <Link to="/blog/technology" className="block hover:text-primary-hover">Technology</Link>
                </li>
                <li>
                  <Link to="/blog/website" className="block hover:text-primary-hover">Website</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/creators"
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
