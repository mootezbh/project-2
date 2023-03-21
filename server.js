const express = require("express");
const dotenv = require("dotenv").config();
const config = require("./config.js")
const categoryRouter = require("./routes/categoryRouter");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/category",categoryRouter);

app.listen(port, () => {
    console.log("Server is running!");
})