
import mongoose  from "mongoose"

const MessageSchema = new mongoose.Schema({
    senderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    recieverID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: truek

    },

}, { timestamps: true}
)

const Message = mongoose.model("Message", MessageSchema, "message");

export default Message;