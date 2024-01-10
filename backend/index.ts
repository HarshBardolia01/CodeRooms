import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { Express, Request, Response } from "express";
import { connectDB } from "./src/database/connectDB";
import jwt from "jsonwebtoken";
import { authentication, authorization } from "./src/middleware/userAuth";
import { Roles } from "./src/dto/user-dto";
import 'colorts/lib/string';

dotenv.config({ path: "./src/config/config.env" });
const app: Express = express();
const PORT = parseInt(process.env.PORT as string, 10);

// await connectDB();

const allowedOrigins = (process.env.ALLOWED_ORIGINS)?.split('\n');

const server = app.listen(
    PORT, () => {
    console.log(`\nServer running on http://localhost:${port}`.yellow);
});

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

app.post("/login", (
    request: Request,
    response: Response
): Response => {
    const user = {
        id: 1,
        name: "Harsh",
        role: "Admin"
    };

    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY as string);
    return response.status(200).send({
        message: "Success",
        token: token
    });
});

app.get("/",
    authentication,
    authorization([
        Roles.MEMBER
    ]), (
        request: Request,
        response: Response
    ): Response => {
    return response.send("Welcome to CodeRooms!");
});