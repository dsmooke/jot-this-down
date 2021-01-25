const fs = require("fs");
const util = require("util");

const express = require("express");
const path = require("path");
// const notes = require("./Notes");
const logger = require("./middleware/logger");
const app = express();

// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Set 'public' as static folder
app.use(express.static(path.join(__dirname, "public")));

// Notes API Routes
app.use("/api/notes", require("./routes/api/notes"));

const PORT = 3000;

// Gets All Created Notes, returns as JSON. (Rest API)
app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

// Gets Single Note
app.get("/api/notes/:id", function (req, res) {

    // Checking to see if id exists
    const found = notes.some(note => note.id === parseInt(req.params.id));

    if (found) {
        res.json(notes.filter(note => note.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No note with the id of ${req.params.id} was found.` })
    }
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});
