import User from "../models/user.model.js";
import {StatusCodes} from "http-status-codes";
import bcrypt from "bcryptjs";
export const signup = async(req, res) => {
   try {
    
    const {fullname, username, pwd, confirmPwd, gender} = req.body;
    // if the passwords are matching
    if(pwd !== confirmPwd) {
        return res.status(StatusCodes.BAD_REQUEST).json({e:"Passwords do not match"})
    }
    // if such username already present in db
    const user = await User.findOne({username});
    if(user) {
        return res.status(StatusCodes.BAD_REQUEST).json({msg: "Such user already exists"})
    }
    // hashing pwd,  10 rounds
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(pwd, salt);

    
    // https://avatar.iran.liara.run/public
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // instead of User.create()
    // for newUser, what inside model is now equal to credentials pasted in by user
    // e.g fullname(from db): fullname(send by user)
    const newUser = new User({
        fullname,
        username,
        pwd:hashedPwd,
        gender, 
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

   if(newUser) {

    await newUser.save();
    //  get from database already stored data: check
    res.status(StatusCodes.CREATED).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username, 
        gender: newUser.gender,
        profilePic: newUser.profilePic
    })
   } else {
    res.status(StatusCodes.BAD_REQUEST).json({err: "Invalid user data"})
   }

   } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({e: "Internal Server Error"})
    
   }
}
export const login = async(req, res) => {
    res.send("Login Page")
}
export const logout  = async(req, res) => {
    res.send("Login Page")
}