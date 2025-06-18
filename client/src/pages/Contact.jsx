import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";
const Contact = () => {
  return (
    <div className="container py-10 lg:py-16 mt-22">
      <div className="bg-neutral text-secondary shadow-xl rounded-xl px-6 py-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
        <h1 className="text-2xl font-bold text-center">Contact us</h1>
        <p className="w-3/5 text-center leading-5 mb-6 mx-auto">
          Have a question or feedback? Reach out to us anytime through the
          contact form or email. We’ll get back to you as soon as possible
        </p>
        <div className="flex flex-col md:flex-row ">
          <div className="w-3/5 ">
            <h2 className="font-bold text-xl my-2">Send us a message</h2>
            <form action="" method="post">
              <input
                className=" py-2 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
              />
              <input
                className=" py-2 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
                placeholder="Your Email"
                type="email"
                name="email"
                id="email"
              />
              <br />
              <textarea
                className="resize-none h-22 py-1 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
                placeholder="Your Message"
                name="message"
                id="message"
              ></textarea>{" "}
              <br />
              <input
                className="py-2 px-4 rounded-md text-md bg-primary  w-3/4 text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
          <div className="w-2/5  ">
            <h2 className="  font-bold text-xl my-2">Contact Information</h2>
            <ul className=" ">
              <li className="py-1">
                <div className="flex items-center justify-self-start space-x-2">
                  <FaPhoneAlt /> <span>+008 01875644190</span>
                </div>
              </li>
              <li className="py-1">
                <div className="flex items-center justify-self-start space-x-2">
                  <MdEmail /> <span>support@techscipt.com</span>
                </div>
              </li>
              <li className="py-1">
                <div className="flex items-center justify-self-start space-x-2">
                  <FaLocationDot /> <span>Gazipur, Dhaka, Bangladesh</span>
                </div>
              </li>
            </ul>
            <div className="">
              <Lottie
                animationData={loader}
                loop={true}
                className="w-72 h-72 ms-[-100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
