

import Book from "../models/Book.js";
import {StatusCodes} from "http-status-codes"
const postABook = async(req, res, next) => {

    try {
        const book = await Book({...req.body});
        await Book.save();
        res.status(StatusCodes.CREATED).send({msg: "Book was posted successfully!", book});
        
    }
    catch(err) {
        console.log("Unable to create book!", err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({msg: "Failed to create book"})
        
    }
}

const getSingleBook = async(req, res, next) => {
   try {
    
   } catch (err) {
    
   }
}

/* 
 getSingleBook,
    getAllBooks,
    deleteABook,
    updateABook,
    postABook

   */