//console.log("Hello world, I am here nowwwwwwww");
import express from "express";
import config from "config";
import routes from "./routes";
import db from "./db";

const app = express();

const port = config.get("port");

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
    db();
    routes(app);
});