// Sets up Inquirer
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

// const DB_DIR = path.resolve(__dirname, "db");
// const dbPath = path.join(DB_DIR, "db.json");

// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 1. HTML Routes-------


// 1a. GET `/notes` - Should return the `notes.html` file. (Basic route that sends the user first to the AJAX Page...?)
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// 1b. GET `*` - Should return the `index.html` file
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


// 3. API Routes------

// 3a. GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

app.get("/api/notes", function (req, res) {
    return res.json("db.json");
});

// 3b. POST `/api/notes` - should receive a new note to save on the request body,  add it to the `db.json` file, and then return the new note to the client--takes in JSON input

app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);

    notes.push(newNote);

    res.json(newNote);
});

// 3c. DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
