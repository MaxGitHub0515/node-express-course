
//Connect to the local server
const express = require('express');
const app = express()

require('dotenv').config();
const connectDB = require('./db/connect');

//optional
require('colors');


const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || 8000;

const start = async () => {
    try {
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`.green)
      );
      await connectDB(process.env.MONGO_URI);
      if(connectDB ){
       console.log('Successfully Connected To The DB!'.green);

      }
    } catch (error) {
        if(error){
            console.log(error); console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red)
        }
     
    }
};


module.exports = start;