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
