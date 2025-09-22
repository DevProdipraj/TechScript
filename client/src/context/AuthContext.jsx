

import React, { createContext, useContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlog] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const backend_url = import.meta.env.VITE_BACKEND_URL;
console.log(backend_url);  


  useEffect(() => {
 
    //  Fetch user profile
   const fetchProfile = async () => {
  try {
    const { data } = await axios.get(
      `${backend_url}/api/users/my-profile`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setProfile(data.user);
    setIsAuthenticated(true);
  } catch (error) {
    console.error("Profile fetch error:", error.message);
    setIsAuthenticated(false);
  }
};


    //  Fetch blog list
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
           `${backend_url}/api/blog/all-blogs`,
          { withCredentials: true }
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    };

    //  Fetch admin list
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(
           `${backend_url}/api/users/admins`,
          { withCredentials: true }
        );
        setAdmins(response.data.admins);
      } catch (error) {
        console.error("Error fetching admins:", error.message);
      }
    };

    fetchProfile();
    fetchBlog();
    fetchAdmin();
  }, []);

  return (
    <AuthContext.Provider value={{ blogs, admins, profile, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
