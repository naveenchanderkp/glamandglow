// import app from "./app.js";
const app = require('./app');
// import connectDB from "./config/db.js";
const connectDB = require('./config/db');
// import dotenv from "dotenv";
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5001;

let server;

if (process.env.NODE_ENV !== 'test') {
  connectDB();
  server = app.listen(PORT, () => {
    console.log('Server running');
  });
}

module.exports = server;
