import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

const createTokenAndSaveCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  await User.findByIdAndUpdate(userId, { token });
  return token;
};

export default createTokenAndSaveCookies;
