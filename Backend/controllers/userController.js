import {User} from "../models/userSchema.js";

export const register = async (req, res) => {
    try {
        const {name,email,password} = req.body;
        const user = await User.create({
            name,email,password
        })

        res.status(200).json({message:"User Created"})
    } catch (error) {
        res.status(500).json({message:"Error occurred during registration!"})
    }
}