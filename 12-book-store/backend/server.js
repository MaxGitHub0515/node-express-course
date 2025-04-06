
//Connect to the local server
const express = require('express');
const app = express()
const figlet = require('figlet')

require('dotenv').config({ path: '.env.local' });

const connectDB = require('./db/connect');
const { red } = require('colors');

//optional
require('colors');


const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env?.MONGO_URI;

const start = async () => {
    try {
      app.listen(PORT, () => 
        console.log(`Server is listening on port ${PORT}...`.green)
      );
      await connectDB(process.env.MONGO_URI);
      if(connectDB ){
       console.log('Successfully Connected To The DB!'.green);
        figlet('Welcome DEV', (err, data) => {
         console.log(data.rainbow)
      })
      }
    } catch (error) {
        if(error){
            console.log(error); console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red)
        }
     
    }
  };

module.exports = start;