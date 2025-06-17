import React from "react";

import { HeroArea } from "../component/home/HeroArea";
import AiBlog from "../component/home/AIBlog";
import DigitalBlog from "../component/home/DigitalBlog";
import Technology from "../component/home/Technology";
import WebsiteBlog from "../component/home/websiteBlog";
import { Link } from "react-router-dom";
import Creators from "../component/creators/Creators";

const Home = () => {
  return (
    <div className="container  ">
      <HeroArea />
      <AiBlog />
      <DigitalBlog />
      <Technology />
      <WebsiteBlog />
      <Creators />
    </div>
  );
};

export default Home;
