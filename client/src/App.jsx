import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashbord from "./pages/Dashbord";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Creators from "./pages/AllCreators";
import { ToastContainer } from "react-toastify";
import TechnologyBlogs from "./pages/TechnologyBlogs";
import AiBlogs from "./pages/AiBlogs";
import DigitalBlogs from "./pages/DigitalBlogs";
import WebsiteBlogs from "./pages/WebsiteBlogs";
// import { useAuth } from './context/AuthContext'

const App = () => {
  const location = useLocation();
  const hideLayoutPaths = ["/dashbord"];
  const shouldHideLayout = hideLayoutPaths.includes(
    location.pathname.toLowerCase()
  );
  // const {blog} = useAuth();
  // console.log(blog);
  return (
    <div>
      {!shouldHideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/technology" element={<TechnologyBlogs />} />
        <Route path="/ai" element={<AiBlogs />} />
        <Route path="/digital" element={<DigitalBlogs />} />
        <Route path="/website" element={<WebsiteBlogs />} />
        <Route path="/allcreators" element={<Creators />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
      <ToastContainer />
    </div>
  );
};

export default App;
