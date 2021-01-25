const express = require("express");
const uuid = require("uuid"); // random id generator
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
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
        status: "active"
    }

    // check to see if title and text are sent when make request
    if (!newNote.title || !newNote.text) {
        res.status(400).json({ msg: "Please include a title and text input." });

    } else {
        // want newNote to be added to array of notes
        notes.push(newNote);
        res.json(notes);
    }

});

// // Update Notes
// router.put("/:id", function (req, res) {

//     // Checking to see if id exists
//     const found = notes.some(note => note.id === parseInt(req.params.id));

//     if (found) {
//         const updateNote = req.body;
//         notes.forEach(note => {
//             if (note.id === parseInt(req.params.id)) {
//                 note.title = updateNote.title ? updateNote.title : note.title;
//                 note.text = updateNote.text ? updateNote.text : note.text;
//                 res.json({ mesg: "Note was updated", note })
//             }
//         });
//     } else {
//         res.status(400).json({ msg: `No note with the id of ${req.params.id} was found.` })
//     }
// });

// Delete Note by id
router.delete("/:id", function (req, res) {

    // Checking to see if id exists
    const found = notes.some(note => note.id === parseInt(req.params.id));

    if (found) {
        res.json({ msg: "Note deleted", notes: notes.filter(note => note.id !== parseInt(req.params.id)) });
    } else {
        res.status(400).json({ msg: `No note with the id of ${req.params.id} was found.` })
    }
});
module.exports = router;