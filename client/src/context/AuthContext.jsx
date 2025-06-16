
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/blog/all-blogs",  
          {
            withCredentials: true
          }
        );
        // console.log(response.data);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    };

    fetchBlog();
  }, []);

  return (
    <AuthContext.Provider value={{ blog }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
