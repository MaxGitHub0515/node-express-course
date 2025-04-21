import User from "../models/auth.model.js"
export const signup = async(req, res) => {
   try {
    
    const {fullname, username, email, pwd, gender} = req.body;


l


   } catch (error) {
    
   }
}
export const login = async(req, res) => {
    res.send("Login Page")
}
export const logout  = async(req, res) => {
    res.send("Login Page")
}