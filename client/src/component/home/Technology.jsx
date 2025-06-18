import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Technology = () => {
  const { blogs } = useAuth();
  // console.log(blogs)
  const TechlonogyBlog = blogs?.filter(
    (blogs) => blogs.category === "Technology"
  );
  // console.log(TechlonogyBlog);
  return (
    <div className="container mx-auto px-0 py-5 ">
      <h1 className="text-2xl font-semibold py-5">
        Top <strong>Technology</strong> Blog 
      </h1>

      {TechlonogyBlog && TechlonogyBlog.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-6">
          {TechlonogyBlog.slice(-4).map((data) => (
            <Link to={`/`} key={data._id}>
              <div className="relative bg-neutral rounded-xl overflow-hidden shadow-lg group transition transform hover:scale-105 duration-300">
                <div className=" ">
                  <img
                    src={data.blogImage.url}
                    alt="blog"
                    className="w-full h-56 object-cover"
                  />
                </div>

                {/* Admin Info */}
                <div className="absolute top-4 left-4  flex items-center space-x-2">
                  <img
                    src={data.adminPhoto}
                    alt="admin"
                    className="w-9 h-9 rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="text-sm font-medium text-neutral">
                      {data.adminName}
                    </p>
                    <p className="text-xs text-neutral">New</p>
                  </div>
                </div>
                {/* Blog Info */}
                <div className=" p-4 ">
                  <h2 className="text-lg font-bold text-secondary">
                    {data.title}
                  </h2>
                  <p className="text-sm line-clamp-3 text-secondary">
                    {data.about}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="mt-4 text-lg text-gray-700 font-medium">
          Currently, there are no blogs categorized under Digital.
        </h2>
      )}
      <div className="text-right py-5">
        <Link to={"/technology"}>
          <button className="text-neutral font-semibold bg-primary py-2 px-6 rounded-md text-md   cursor-pointer transition-all duration-400 my-3 hover:bg-primary-hover">
            View All Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Technology;
