const express = require("express");
const router = express.Router();
const notes = require("../../Notes");

// Gets All Created Notes, returns as JSON. (Rest API)
router.get("/", function (req, res) {
    return res.json(notes);
});

// Gets Single Note
router.get("/:id", function (req, res) {

    // Checking to see if id exists
    const found = notes.some(note => note.id === parseInt(req.params.id));

    if (found) {
        res.json(notes.filter(note => note.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No note with the id of ${req.params.id} was found.` })
    }
});

// Create Note (POST) - add it to 'db.json' file, return new note to client
router.post("/", function (req, res) {
    // res.send(req.body)
    const newNote = {

    }
});

module.exports = router;