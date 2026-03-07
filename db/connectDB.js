import mongoose from "mongoose";

const connectDB = async () => {

    if (mongoose.connections[0].readyState) {
        return;
    }

    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/chai");

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error("MongoDB Error:", error);
        process.exit(1);
    }
};

export default connectDB;