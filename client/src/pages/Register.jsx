import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [passWord, setPassWord] = useState();
  const [role, setRole] = useState();
  const [education, setEducation] = useState();
  const [photo, setPhoto] = useState();
  const [photoPreview, setPhotoPreview] = useState();

  return (
    <div>
      <div className="  flex items-center justify-center bg-gray-100 py-8 lg:py-16">
        <div className="w-full min-w-2/7 max-w-max bg-white shadow-md rounded-lg p-8">
          <form>
            <div className="font-semibold text-xl items-center text-center">
              <Link>
                <img className="w-3/6 m-auto" src="./logo.png" alt="" />
              </Link>
            </div>
            <h1 className="text-xl font-semibold mb-6">Register</h1>
            <select value={role} className="w-full p-2 mb-4 border rounded-md">
              <option value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                className="w-full p-2  border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                className="w-full p-2  border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Your Phone Number"
                value={phone}
                className="w-full p-2  border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Your Password"
                value={passWord}
                className="w-full p-2  border rounded-md"
              />
            </div>
            <select className="w-full p-2 mb-4 border rounded-md">
              <option value={education}>Select Your Education</option>
              <option value="BBA ">BBA</option>
              <option value="MBA ">MBA</option>
              <option value="CSE ">CSE</option>
              <option value="Others ">Others</option>
            </select>
            <div className="flex items-center justify-between mb-4">
              <div className="photo w-20 h-20 mr-4">
                <img   src="#" alt="photo" />
              </div>
              <input
                type="file"
                className="w-3/6 p-2  border rounded-md cursor-pointer"
              />
            </div>

            <p className="text-center mb-4">
              Already registered?{" "}
              <Link to={"/login"} className="text-primary">
                Login Now
              </Link>
            </p>
            <button
              type="submit"
              className="w-full cursor-pointer p-2 bg-primary hover:bg-primary-hover duration-300 rounded-md text-white"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
