
// Imports

import {app, server} from "./socket/socket.js"
import express from "express"
import cookieParser from "cookie-parser"
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv"
dotenv.config({ path: '.env.local' });
import configCors from "./config/cors.config.js"
// optional
import colors from "colors"



// for parsing our requests like req.body etc
app.use(express.json()) 

app.use(configCors())
app.use(cookieParser()) // parse the incoming cookies from req.cookies

const PORT = process.env.PORT || 8000;

// imported routes
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/messages', messageRoutes)


const Start = (async () => {
    try{
        server.listen(PORT, () => {
            console.log(`Server is listening on PORT=${PORT}`.green)
        }) 
        
        await connectDB(process.env.MONGO_URI);
        if(connectDB) {
            console.log('Successfully Connected To The DB!'.green);
        }
        
    } catch(e) {
        console.log(e.message);
        console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red)
        
        
    }
})();

