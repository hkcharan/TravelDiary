import { User } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const accessToken = jwt.sign({userId:user._id},process.env.ACCESS_TOKEN,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRE
    })

    return res.status(201).json({
        user,
        accessToken,
        message:"User Registred!"
    })


  } catch (error) {
    res.status(500).json({ message: "Error occurred during registration!" });
  }
};
