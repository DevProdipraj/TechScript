
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
//   const [isMobileBlogDropdownOpen, setIsMobileBlogDropdownOpen] = useState(false);
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setIsNavbarVisible(false);
//       } else {
//         setIsNavbarVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Toggle desktop blog dropdown on hover
//   const handleMouseEnter = () => setIsBlogDropdownOpen(true);
//   const handleMouseLeave = () => setIsBlogDropdownOpen(false);

//   // Toggle mobile blog dropdown on click
//   const toggleMobileBlogDropdown = (e) => {
//     e.preventDefault();
//     setIsMobileBlogDropdownOpen(!isMobileBlogDropdownOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div
//         className={`bg-neutral sticky top-0 z-40 shadow-lg transition-transform duration-500 ease-in-out ${
//           isNavbarVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="container py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div>
//             <Link to="/">
//               <img
//                 className="h-auto w-[75%]"
//                 src="./logo.png"
//                 alt="Brand Icon"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8 relative">
//             <Link
//               to="/"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//             >
//               Home
//             </Link>

//             {/* Blog with dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 type="button"
//                 className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500 flex items-center gap-1"
//               >
//                 Blog
//                 <svg
//                   className="w-4 h-4 inline-block"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19 9l-7 7-7-7"
//                   ></path>
//                 </svg>
//               </button>

//               {/* Dropdown menu */}
//               {isBlogDropdownOpen && (
//                 <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
//                   <li>
//                     <Link
//                       to="/blog/ai"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       AI
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/blog/digital"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       Digital
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/blog/technology"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       Technology
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>

//             <Link
//               to="/creators"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//             >
//               Creators
//             </Link>
//             <Link
//               to="/about"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden md:flex space-x-2 ms-2">
//             <Link to="/login">
//               <button className="py-1.5 rounded-md text-md bg-primary w-[90px] text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover">
//                 Login
//               </button>
//             </Link>
//             <Link to="/register">
//               <button className="py-1.5 rounded-md text-md bg-primary w-[90px] text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover">
//                 Register
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Hamburger */}
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
//               className={`w-[32px] h-[4px] bg-gray-700 my-1 rounded-sm transition-all ${
//                 isOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         onClick={() => setIsOpen(false)}
//         className={`bg-gray-300 h-screen w-[60%] sm:w-[40%] md:hidden top-0 fixed px-8 pt-10 transition-transform duration-500 ease-in-out transform z-50 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <ul>
//           <li className="mb-4">
//             <Link to="/">
//               <img className="h-auto w-full" src="./logo.png" alt="Logo" />
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               to="/"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6"
//             >
//               Home
//             </Link>
//           </li>

//           {/* Mobile Blog dropdown */}
//           <li className="mb-2">
//             <button
//               onClick={toggleMobileBlogDropdown}
//               className="flex justify-between w-full text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6"
//             >
//               Blog
//               <svg
//                 className={`w-4 h-4 transition-transform duration-300 ${
//                   isMobileBlogDropdownOpen ? "rotate-180" : "rotate-0"
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </button>

//             {isMobileBlogDropdownOpen && (
//               <ul className="pl-4 mt-1">
//                 <li>
//                   <Link
//                     to="/blog/ai"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//                   >
//                     AI
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/blog/digital"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//                   >
//                     Digital
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/blog/technology"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//                   >
//                     Technology
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="mb-2">
//             <Link
//               to="/creators"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6"
//             >
//               Creators
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               to="/about"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6"
//             >
//               About
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               to="/contact"
//               className="text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6"
//             >
//               Contact
//             </Link>
//           </li>

//           <li className="mt-4">
//             <Link to="/login">
//               <button className="text-neutral font-semibold bg-primary py-1 px-6 rounded-full text-md hover:bg-gray-300 transition-all duration-400 my-3">
//                 Login
//               </button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
        className={`bg-neutral fixed top-0 left-0 right-0 z-40 shadow-lg transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container py-4 flex items-center justify-between">
          <div>
            <Link to="/">
              <img className="h-auto w-[75%]" src="./logo.png" alt="Brand Icon" />
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
                <span className="cursor-pointer text-md font-semibold text-secondary hover:underline hover:text-primary-hover underline-offset-6 transition-all duration-500">
                  Blog
                </span>
                <ul className="absolute left-0 top-full bg-white shadow-md rounded-md py-2 mt-2 min-w-[150px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <li>
                    <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
                      All Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/ai" className="block px-4 py-2 hover:bg-gray-100">
                      AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog/technology"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog/website"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Website
                    </Link>
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
                  <Link to="/blog" className="block hover:text-primary-hover">
                    All Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/blog/ai" className="block hover:text-primary-hover">
                    AI
                  </Link>
                </li>
                <li>
                  <Link to="/blog/technology" className="block hover:text-primary-hover">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to="/blog/website" className="block hover:text-primary-hover">
                    Website
                  </Link>
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
