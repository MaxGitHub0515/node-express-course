
const express = require('express');
const app = express();

// middleware imports from project files
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Packages: Security checks etc Imports
const cors = require("cors");
const xss = require("xss");
const helmet = require("helmet");

/* DEFAULT MIDDLEWARE & SECURITY */

//security
app.use(cors());
// app.use(xss());
app.use(helmet()); // enables security headers


//default midd
app.use(express.static("../client/public"));
app.use(express.json());


// routes App


//  routers


// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

// Server starter
const startApp = require('./server');

startApp();
