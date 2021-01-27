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

//----------------
// HTML Route???? to see html page w/ visuals and corresponding js
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    //public/index.html or index.html path
});



const PORT = 3000;

// display index.html page and notes.html
// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     var path = req.url;

//     switch (path) {
//         case "/notes":
//             return renderNotesPage(req, res);
//         default:
//             return renderHomePage(req, res);
//     }
// }

// function renderHomePage(req, res) {
//     fs.readFile(__dirname + "/index.html", function (err, data) {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/html" });
//             res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
//         }
//         else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         }
//     });
// }

// function renderNotesPage(req, res) {
//     fs.readFile(__dirname + "/notes.html", function (err, data) {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/html" });
//             res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
//         }
//         else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);

//         }
//     });
// }

// Gets All Created Notes, returns as JSON. (Rest API)
// app.get("/api/notes", function (req, res) {
//     return res.json(notes);
// });

// // Gets Single Note
// app.get("/api/notes/:id", function (req, res) {

//     // Checking to see if id exists
//     const found = notes.some(note => note.id === parseInt(req.params.id));

//     if (found) {
//         res.json(notes.filter(note => note.id === parseInt(req.params.id)));
//     } else {
//         res.status(400).json({ msg: `No note with the id of ${req.params.id} was found.` })
//     }
// });

// // Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});

