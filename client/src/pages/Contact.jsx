// import React from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import Lottie from "lottie-react";
// import loader from "../assets/loader.json";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       access_key: "8dc5053d-d4a7-4579-a205-7fa2a857543a",
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       const response = await axios.post(
//         "https://api.web3forms.com/submit",
//         userInfo
//       );
//       if (response.data.success) {
//         toast.success("Message sent successfully");
//         reset(); 
//       } else {
//         toast.error("Error: " + response.data.message);
//       }
//     } catch (error) {
//       toast.error("An error occurred: " + error.message);
//     }
//   };

//   return (
//     <div className="container py-10 lg:py-16 mt-22">
//       <div className="bg-neutral text-secondary shadow-xl rounded-xl px-6 py-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
//         <h1 className="text-2xl font-bold text-center">Contact us</h1>
//         <p className="w-3/5 text-center leading-5 mb-6 mx-auto">
//           Have a question or feedback? Reach out to us anytime through the
//           contact form or email. We’ll get back to you as soon as possible
//         </p>
//         <div className="flex flex-col md:flex-row ">
//           <div className="w-3/5 ">
//             <h2 className="font-bold text-xl my-2">Send us a message</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div>
//                 <input
//                   {...register("name", { required: true })}
//                   className="py-2 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
//                   placeholder="Your Name"
//                   type="text"
//                 />
//                 <br />
//                 {errors.name && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>

//               <div>
//                 <input
//                   {...register("email", { required: true })}
//                   className="py-2 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
//                   placeholder="Your Email"
//                   type="email"
//                 />
//                 <br />
//                 {errors.email && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>

//               <div>
//                 <textarea
//                   {...register("message", { required: true })}
//                   className="resize-none h-32 py-1 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
//                   placeholder="Your Message"
//                 />
//                 <br />
//                 {errors.message && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>

//               <input
//                 type="submit"
//                 value="Send Message"
//                 className="py-2 mt-1 px-4 rounded-md text-md bg-primary w-3/4 text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover"
//               />
//             </form>
//           </div>

//           <div className="w-2/5 ">
//             <h2 className="font-bold text-xl my-2">Contact Information</h2>
//             <ul>
//               <li className="py-1">
//                 <div className="flex items-center space-x-2">
//                   <FaPhoneAlt /> <span>+008 01875644190</span>
//                 </div>
//               </li>
//               <li className="py-1">
//                 <div className="flex items-center space-x-2">
//                   <MdEmail /> <span>support@techscipt.com</span>
//                 </div>
//               </li>
//               <li className="py-1">
//                 <div className="flex items-center space-x-2">
//                   <FaLocationDot /> <span>Gazipur, Dhaka, Bangladesh</span>
//                 </div>
//               </li>
//             </ul>
//             <div>
//               <Lottie
//                 animationData={loader}
//                 loop={true}
//                 className="w-72 h-72 ms-[-100px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }

    const userInfo = {
      access_key: "8dc5053d-d4a7-4579-a205-7fa2a857543a",
      name: data.name,
      email: data.email,
      message: data.message,
      "h-captcha-response": captchaToken,
    };

    try {
      const response = await axios.post("https://api.web3forms.com/submit", userInfo);
      if (response.data.success) {
        toast.success("Message sent successfully");
        reset();
        setCaptchaToken(null);
        setCaptchaError(false);
      } else {
        toast.error("Error: " + response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("name", { required: true })}
                  className="py-2 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
                  placeholder="Your Name"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <input
                  {...register("email", { required: true })}
                  className="py-2 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
                  placeholder="Your Email"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <textarea
                  {...register("message", { required: true })}
                  className="resize-none h-32 py-1 px-2 w-3/4 my-2 border-secondary border-[1px] rounded-md"
                  placeholder="Your Message"
                />
                {errors.message && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="my-2">
                <HCaptcha
                  sitekey="your-hcaptcha-site-key-here"
                  onVerify={setCaptchaToken}
                  onExpire={() => setCaptchaToken(null)}
                  theme="light"
                />
                {captchaError && (
                  <span className="text-red-500 text-sm">
                    Please verify you are human
                  </span>
                )}
              </div>

              <input
                type="submit"
                value="Send Message"
                className="py-2 mt-1 px-4 rounded-md text-md bg-primary w-3/4 text-neutral cursor-pointer transition-all duration-400 hover:bg-primary-hover"
              />
            </form>
          </div>

          <div className="w-2/5 ">
            <h2 className="font-bold text-xl my-2">Contact Information</h2>
            <ul>
              <li className="py-1">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt /> <span>+008 01875644190</span>
                </div>
              </li>
              <li className="py-1">
                <div className="flex items-center space-x-2">
                  <MdEmail /> <span>support@techscipt.com</span>
                </div>
              </li>
              <li className="py-1">
                <div className="flex items-center space-x-2">
                  <FaLocationDot /> <span>Gazipur, Dhaka, Bangladesh</span>
                </div>
              </li>
            </ul>
            <div>
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
