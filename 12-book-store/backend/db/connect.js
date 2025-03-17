const mongoose = require('mongoose');


const connectDB = (MONGO_URI) => {
  return mongoose.connect(MONGO_URI);
};

module.exports = connectDB;

