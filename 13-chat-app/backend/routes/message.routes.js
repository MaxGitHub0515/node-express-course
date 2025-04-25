
import express from "express";
import {sendMessage} from "../controllers/message.controller.js"
import {protectRoute} from "../middleware/protectRoute.js"
const router = express.Router();

// send/userid: crashes the server here
router.post("/send/:id", protectRoute, sendMessage);


export default router;
