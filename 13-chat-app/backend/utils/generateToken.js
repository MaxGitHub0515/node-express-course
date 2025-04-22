import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

const generateTokenAndSetCookie = (userID, res) => {

    const token = jwt.sign({userID},  process.env.JWT_SECRET, {
        expiresIn:'15d'
    })
    //send jwt into cookie
    // cookie('cookiename", token, options) then verify token with payload 
    res.cookie('jwt', token, {
        //starting from days ending with ms
        maxAge: 15 * 24 * 60 * 60 * 1000, // total in ms
        httpOnly:true, // prevent xss - cookie is not accessible via js
        sameSite: 'strict', // prevent csrf - cookie is not sent with cross-origin requests
        secure: process.env.NODE_ENV === 'production', // only send cookie over https in production
        
    } )
}

export default generateTokenAndSetCookie;

