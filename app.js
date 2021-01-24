const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const express = require("express");
const path = require("path");// path: ^ used for both Inquirer.js and Express.js

const app = express();

// Set 'public' as static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

// Middleware: logger to return accessed url
const logger = function (req, res, next) {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

// Init middleware
app.use(logger);

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// 1. HTML Routes-------

// 1a. GET `/notes` - Should return the `notes.html` file. 
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
    // console.log("Retrieved notes.html file from public folder.")
});

// 1b. GET `*` - Should return the `index.html` file
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
    // console.log("Retrieved index.html file from public folder.")
});



// 3. API Routes------

// 3a. GET `/api/notes` - Should read the `db.json` file (will contain all created notes) and return all saved notes as JSON. (Rest API)

app.get("/api/notes", function (req, res) {
});

// 3b. POST `/api/notes` - should receive a new note to save on the request body,  add it to the `db.json` file, and then return the new note to the client--takes in JSON input

// app.post("/api/notes", function (req, res) {


// 3c. DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.



// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});
