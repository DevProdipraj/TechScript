import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const AllCreators = () => {
  const { admins } = useAuth();
  // console.log(admins);

  return (
    <div className="container mx-auto px-5 py-10 lg:py-16 mt-22 ">
      <h1 className="text-2xl font-semibold py-5">All creators </h1>

      {admins && admins.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 ">
          {admins.map((data) => (
            <Link to={`/`} key={data._id}>
              <div className="bg-neutral py-4 rounded-2xl shadow-2xl">
                <div className="overflow-hidden h-62 w-62 mx-auto rounded-full ">
                  <img
                    src={data.photo.url}
                    alt="admin"
                    className="h-62 w-62 mx-auto rounded-full object-bottom transform  transition-all duration-300 hover:scale-125"
                  />
                </div>
                <div className="text-center">
                  <p className="capitalize py-[6px] text-xl text-secondary ">
                    {data.role}
                  </p>
                  <p className="capitalize text-secondary">{data.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="mt-4 text-lg text-gray-700 font-medium">
          Currently, there are no creator data.
        </h2>
      )}
      
    </div>
  );
};

export default AllCreators;
