import { User } from "../model/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, name, password, phone, education, role } = req.body;
    if (!email || !name || !password || !phone || !education || !role) {
      return res.jeson({
        success: false,
        message: "All Filed Are requird!!",
      });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User All Ready Register...",
      });
    }

    const newUser = new User({ email, name, password, phone, education, role });
    await newUser.save();

    if (newUser) {
      res.json({ success: true, message: "User Registered Successfully" });
    }
  } catch (error) {
     return res.json({
      success: false,
      message: error.message,
    });
  }
};
