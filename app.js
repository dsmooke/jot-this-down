// const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const express = require("express");
const path = require("path");
const notes = require("./Notes");
const logger = require("./middleware/logger");
const app = express();

// Init middleware
app.use(logger);

// Set 'public' as static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;






// API Routes

// Gets all created notes, returns as JSON. (Rest API)
app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});
