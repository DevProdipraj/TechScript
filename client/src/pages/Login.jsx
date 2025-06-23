import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [role, setRole] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  // user Login function
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Please verify reCAPTCHA!");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/users/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("User Logged in successfully" || data.message);

      setEmail("");
      setPassWord("");
      setRole("");
      setCaptchaValue(null);
    } catch (error) {
      toast.error("All Fields Are Required!" || error.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100 py-8 lg:py-16 mt-22">
        <div className="w-full min-w-2/7 max-w-max bg-white shadow-md rounded-lg p-8">
          <form>
            <h1 className="text-xl font-semibold mb-6">Login</h1>

            <select
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md"
            >
              <option value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>

            <div className="mb-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email Address"
                value={email}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <input
                onChange={(e) => setPassWord(e.target.value)}
                type="password"
                required
                placeholder="Your Password"
                value={password}
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* reCAPTCHA */}
            <div className="mb-4">
              <ReCAPTCHA
                sitekey="6Ldz_GorAAAAAJ0VQOjtn-Oo4SFVORi2DFaHbeMm"
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>

            <p className="text-center mb-4">
              Don't have account?{" "}
              <Link to={"/register"} className="text-primary">
                Register Now
              </Link>
            </p>

            <button
              type="submit"
              onClick={handleLogin}
              disabled={!captchaValue}
              className={`w-full cursor-pointer p-2 rounded-md text-white duration-300
                ${captchaValue ? "bg-primary hover:bg-primary-hover" : "bg-[#00000070] disabled:cursor-not-allowed"}`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
