const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not defined');
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);

    if (process.env.NODE_ENV !== 'test') {
      process.exit(1);
    }

    throw error;
  }
};

module.exports = connectDB;
