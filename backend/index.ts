import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { Express, Request, Response } from "express";
import { connectDB } from "./src/database/connectDB";

dotenv.config({ path: "./src/config/config.env" });
const app: Express = express();
const port = parseInt(process.env.PORT as string, 10);

const allowedOrigins = (process.env.ALLOWED_ORIGINS)?.split('\n');

const start = async () => {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
};

start();

app.use(express.json());
app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (
    request: Request,
    response: Response
): Response => {
    return response.send("Hello from CodeRoomsss!");
});