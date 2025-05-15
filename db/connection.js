import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbURL = process.env.DBURL;
    const dbName = process.env.DBNAME;

    const fullMongoURI = `${dbURL}${dbName}`;

    const conn = await mongoose.connect(fullMongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected ✅: ${conn.connection.host}`);
  } catch (error) {
    console.error("DB connection failed ❌", error.message);
    process.exit(1);
  }
};

export default connectDB;
