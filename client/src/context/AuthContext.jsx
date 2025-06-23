import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlog] = useState([]);
  const [admins, setAdmins] = useState([]);
  // const [profile, setProfile] = useState();
 


  // fetchBlog data
  useEffect(() => {
    // get user data
    // const fetchProfile = async () => {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost:3000/api/users/my-profile",
    //       {
    //         withCredentials: true,
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //       }
    //     );
    //     console.log(response);
    //     setProfile(response.data.admins);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // };
    // get blog data
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/blog/all-blogs",
          {
            withCredentials: true,
          }
        );
        // console.log(response.data);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    };
    // get admin data
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/users/admins",
          {
            withCredentials: true,
          }
        );
        // console.log(response.data.admins)
        setAdmins(response.data.admins);
      } catch (error) {
        console.error(error.message);
      }
    };
    // fetchProfile();
    fetchAdmin();
    fetchBlog();
  }, []);

  return (
    <AuthContext.Provider value={{ blogs, admins }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
