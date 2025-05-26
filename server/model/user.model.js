import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email Address..."],
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  photo: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    require: true,
    enum: ["user", "admin"],
    default: "student",
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
  },
   token:{
    type : String,
   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
