import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = async(req, res) => {

    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn:'15d'
    })
    //send jwt into cookie
    // cookie('cookiename", token, options) then verify token with payload
    res.cookie('jwt', token, {
        //starting from days ending with ms
        maxAge: 15 * 24 * 60 * 60 * 1000, // total in ms
        httpOnly:true, // prevent xss - cookie is not accessible via js
        
    } )
}

export default generateTokenAndSetCookie;

// finished here 50