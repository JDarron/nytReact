// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
// DB MODELS
// const db = require("./app_api/models");
// PORT
const PORT = process.env.PORT || 3001;
const app = express();

// BODY PARSER CONFIG
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('app_client/build'));


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
}); // END THEN

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
var PORT = 3000;

var app = express();


app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/week18Populater", {
  useMongoClient: true
});