import express from "express";
import { Logger } from "./src/util/logger";
import { Express, Request, Response } from "express";
import { Ok } from "./src/response/http-responses";
const port = 8000;

const app: Express = express();

app.get("/hi", (req: Request, res: Response) => {
    res.send("Hiiii!!!!");
});

app.get("/", (req: Request, res: Response) => {
    return Ok(
        res,
        "this is from index page!",
        {
            testing: "hello"
        }
    );
});

app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}/`);
});