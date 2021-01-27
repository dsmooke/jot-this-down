const http = require("http");
const fs = require("fs");
const util = require("util");

const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");
const app = express();

// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Set 'public' as static folder
app.use(express.static((path.join(__dirname, "public"))));

// Notes API Routes
app.use("/api/notes", require("./routes/api/notes"));

// HTML Route
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

const PORT = 3000;

// // Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});

