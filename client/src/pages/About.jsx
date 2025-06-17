import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">About Our Blog</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Welcome to our blog platform — your destination for diverse stories, ideas, and insights. Whether you're here to read or contribute, we've built this platform for everyone.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-primary">📖 For Readers</h2>
          <p className="text-gray-600">
            Anyone can freely explore and read blogs across various topics.
            From tech and travel to lifestyle and opinions — our platform
            offers a space to enjoy fresh and original content written by real people.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-primary">✍️ For Admins</h2>
          <p className="text-gray-600">
            Admin users have the ability to create, manage, and publish blogs.
            We believe in empowering content creators with the tools to share
            their voice and connect with an audience.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 text-lg">
          Built with <span className="font-semibold text-primary">React, Node.js, MongoDB,</span> and <span className="font-semibold text-primary">Tailwind CSS</span>, this platform combines performance with simplicity.
        </p>
        
      </div>
    </div>
  );
};

export default About;
