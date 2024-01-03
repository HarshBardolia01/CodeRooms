import express from "express";
import { Logger } from "./src/util/logger";
import { Express, Request, Response } from "express";
const port = 8000;

const app: Express = express();

app.get("/hi", (req: Request, res: Response) => {
    res.send("Hiiii!!!!");
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from index.ts");
});

app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}/`);
});