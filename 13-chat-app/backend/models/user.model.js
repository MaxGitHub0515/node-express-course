 
import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true, 
        trim:true
    },
    username: {
        type: String,
        unique:true,
        required: true 
    },


    // email: {
    //     type: String,
    //     match: [
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //         'Please provide a valid email',
    //       ],
    //     required:true
    // },

    pwd: {
        type:String,
        minlenght: 6,
        required:true,

    },

    gender: {
        type:String,
        enum:["male, female"],
        require: true 
    },

    profilePic: {
        type:String, 
        default: ""
    },
}, 
)

const User = mongoose.model("User", UserSchema, "user");
export default User;

