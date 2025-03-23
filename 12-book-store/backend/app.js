
const express = require('express');
const app = express();


const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



// middleware

app.use(notFound);
app.use(errorHandlerMiddleware);



app.use(express.static('../client/public'))
app.use(express.json());


const startApp = require('./server');

startApp();




