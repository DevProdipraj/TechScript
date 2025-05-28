import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

// Authentication
// =============
export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // console.log("Middleware Token:", token);

    if (!token) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // console.log("Decoded Token:", decoded);

    const user = await User.findById(decoded.id);
    // console.log(user)
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    // console.log("Error occurring in Authentication:", error.message);
    return res.status(401).json({ error: "User not authenticated" });
  }
};

// authorization
// =============
export const isAdmin = (...roles) => {
  return (req, res, next) => {
    // console.log(req.user)
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: `User with given role ${req.user.role} not allowed` });
    }
    next();
  };
};
