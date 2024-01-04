import mongoose, { ConnectOptions } from "mongoose";
import { Logger } from "../util/logger";

export const connectDB = async () => {
    const db = process.env.MONGO_URL as string;
    const connection = await mongoose.connect(db, { useNewUrlParser: true } as ConnectOptions);
    console.log("MongoDB Connected!");
};