import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    const connectionResponse = await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Database connection Failed");
    process.exit(0);
  }
};
