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

// API Routes

// GETs all created notes, returns as JSON. (Rest API)
app.get("/api/notes", function (req, res) {
    return res.json(notes); //rename db.json to savedNotes.json? and module.exports = savedNotes ?
});

// POST `/api/notes` - should receive a new note to save on the request body,  add it to the `db.json` file, and then return the new note to the client--takes in JSON input

// DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.



// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});
