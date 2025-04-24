import Message from "../models/message.model.js";

import {StatusCodes} from "http-status-codes";


export const sendMessage = async(req, res) => {
    res.send("Send message ")
    try {
      const {message} = req.body;
      // same as const id = req.params.id
      const {id} = req.params;


    } catch (error) {
        console.log(error.message)
        
    }
}   

// finished here 1:10