
import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    trending: {
        type: Boolean,
        required:true
    },
    coverImg: {
        type:String,
        required:true
    },
    oldPrice: {
        type: Number,
        required:true
    },
    newPrice: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        dwfault: Date.now
    }
},
    {
        timestamps:true
    }
)


const Book = mongoose.model("Book", BookSchema, "books" )

/* BOOK MODEL

    title
    description
    category
    trending
    coverImg
    oldPrice
    newPrice
    createdAt
        timestamps

*/