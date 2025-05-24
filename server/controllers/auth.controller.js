import { User } from "../model/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, name, password, phone, education, role } = req.body;

    // Validate input
    if (!email || !name || !password || !phone || !education || !role) {
      return res.json({
        success: false,
        message: "All Fields Are Required!!",
      });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User Already Registered...",
      });
    }


    // Create and save user
    const newUser = new User({ email, name, password, phone, education, role });
    await newUser.save();

    res.json({
      success: true,
      message: "User Registered Successfully",
    });

  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
