import mongoose, { ConnectOptions } from "mongoose";
import { Logger } from "../util/logger";

export const connectDB = async () => {
    try {
        const db = process.env.MONGO_URL as string;
        const con = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);

        console.log(`MongoDB Connected: ${con.connection.host}`.cyan.underline);

    } catch (error: any) {
        Logger.error(`Error: ${error.message}`);
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1);
    }
};