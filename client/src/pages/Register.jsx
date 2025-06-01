import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center h-[70vh]">
          <div className="w-">
            <form method="post">
              <Link>
                <img src="./logo.png" alt="brand Icon" />
              </Link>
              <h2 className="text-primary font-semibold">Register</h2>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
