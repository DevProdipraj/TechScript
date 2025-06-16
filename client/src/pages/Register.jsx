import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassWord] = useState();
  const [role, setRole] = useState();
  const [education, setEducation] = useState();
  const [photo, setPhoto] = useState();
  const [photoPreview, setPhotoPreview] = useState();

  // set photo preview
  const changePhotoHandeler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  // user register function
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/users/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("User registered successfully" || data.message);
      // console.log(data);
      setName("");
      setEmail("");
      setPhone("");
      setPassWord("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
    } catch (error) {
      // console.log(error);
      if (error.response && error.response.status === 409) {
        toast.error("User already exists with this email or phone!");
      } else {
        toast.error( "All Filds Are required !!" || error.message );
      }
    }
  };

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
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                value={name}
                required
                className="w-full p-2  border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email Address"
                value={email}
                required
                className="w-full p-2  border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                required
                placeholder="Your Phone Number"
                value={phone}
                className="w-full p-2  border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setPassWord(e.target.value)}
                type="password"
                required
                placeholder="Your Password"
                value={password}
                className="w-full p-2  border rounded-md"
              />
            </div>
            <select
              value={education}
              required
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md"
            >
              <option value="">Select Your Education</option>
              <option value="BBA ">BBA</option>
              <option value="MBA ">MBA</option>
              <option value="CSE ">CSE</option>
              <option value="Others ">Others</option>
            </select>
            <div className="flex items-center justify-between mb-4">
              <div className="photo w-20 h-20 mr-4">
                <img
                  src={photoPreview ? `${photoPreview}` : "photo"}
                  alt="photo"
                />
              </div>
              <input
                onChange={changePhotoHandeler}
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
              onClick={handleRegister}
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
