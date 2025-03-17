
const express = require('express');
const app = express();

const articles = require('./routes/articles');


const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



// middleware

app.use(notFound);
app.use(errorHandlerMiddleware);



app.use(express.static('../client/public'))
app.use(express.json());


const startApp = require('./server');

startApp();




