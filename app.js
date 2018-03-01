var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

const PORT = process.env.PORT || 3001;

var app = express();

// BODY PARSER SET UP
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

// MONGOOSE SETUP
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nyTimesReact");

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});