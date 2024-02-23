// src/app/utils/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://goelisha:goelisha@cluster0.p5qxwq0.mongodb.net/'; // Replace with your MongoDB URI

const ConnectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

export default ConnectDB;
//mongodb+srv://goelisha:<password>@cluster0.p5qxwq0.mongodb.net/?