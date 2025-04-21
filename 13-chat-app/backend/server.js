
// Imports

import express from "express"
const app = express();

import cookieParser from "cookie-parser"
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()



// for parsing our requests like req.body etc
app.use(express.json()) 
app.use(cors())

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;



const Start = (async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT=${PORT}`.green)
        })
        
        await connectDB(MONGO_URI);
        if(connectDB) {
            console.log('Successfully Connected To The DB!'.green);
        }
        
    } catch(e) {
        console.log(e);
        console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red)
        
    }
})();

