import {Server} from "socket.io"
import http from "http";

import express from "express"
const app = express();

const server = http.createServer(app);
const io = new Server(server);
const userSocketMap = {}; 

// socket has various properties like id etc
io.on('connect', (socket) => {
    console.log("A User Is Connected", socket.id)

    // socket.on() is used to listen to the events, it is used both for front and server-side
    socket.on('disconnect', () => {
        console.log("A User Was Disconnected");
        
    })

    

});



export {app, server, io};


