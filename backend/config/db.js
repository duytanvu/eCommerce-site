import mongoose from 'mongoose';

/**
 * @description Async funtion to connect to MongoDB Atlas
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.error(`Error: ${e}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
