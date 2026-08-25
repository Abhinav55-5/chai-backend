import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        console.log("MONGO_URI loaded:", !!process.env.MONGO_URI);
        console.log("MONGO_URI starts correctly:", process.env.MONGO_URI?.startsWith("mongodb"));
        console.log("DB NAME:", DB_NAME);
        console.log("URI:", process.env.MONGO_URI.split("@")[0] + "@...");

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
        );

        console.log(
            `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB