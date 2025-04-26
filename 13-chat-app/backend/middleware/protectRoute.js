import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; // then parse the cookie
        if(!token) {
            return res.status(StatusCodes.UNAUTHORIZED).json({e:"Unauthorized: No Token Provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) return res.status(StatusCodes.UNAUTHORIZED).json({e:"Unauthorized: Invalid Token"});
        // userID taken from generateToken.js when signing jwt
        const user = await User.findById(decoded.userID).select("-pwd");
        if(!user) return res.status(StatusCodes.NOT_FOUND).json({e: "User Not Found"});

        // if passing all the checks above; currently authenticated user
        req.user = user;

        next(); // call the next function - sendMessage in this case
        
    }   
    catch (error) {
            console.log("Error in protectRoute middleware", error.message);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({e: "Internal Server Error"})
           }
}   

export default protectRoute;

