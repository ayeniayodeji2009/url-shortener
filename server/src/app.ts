console.log("Hello world, I am here nowwwwwwww")
import express from "express";
import config from "config";
//import bodyParser from "body-parser";
const connection = require("./config/db.config");
connection.once("open", () => console.log("DB connected"))
connection.on("error", () => console.log("Error"))
//import routes from "./routes";
// //import db from "./db";
/* import express package(commonJS syntax)
const express = require('express') */




const app = express();

const PORT = config.get("port");

// parse application/json
//app.use(bodyParser.json());


//Routes config
app.use(express.json({
    limit: 10, /* 10kb */
 /* extended: false */
})); // parse incoming request body in JSON format


app.use('/', require("./routes/redirect"));
app.use('/api/url', require("./routes/url"));
//app.get("/", function(req, res){ res.send("This is a test web page <br /><h1>I am your GOD FATHER 4000</h1> ra ta ta !!!") })
app.listen(PORT, () => {
    console.log(`Application listening at http://localhost:${PORT}`);
 //   db();
 // routes(app);
});

//test
// const expressTest = require("express");
// app.get("/", function(req, res){ res.send("This is a test web page <br /><h1>I am your GOD FATHER 3000</h1>") })

// app.listen(3000, () => {console.log(`Server running on localhost:3000`)})
