var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3001;

var app = express();

// ROUTES FILE CONTAINING OUR ROUTES
const routes = require("./app_api/routes/article.route");

// DB NAME AND COLLECTION 
const dbUrl = "nyTimesReact";
const collections = ["Articles"];

// HOOK MONGO CONFIG TO DB VARIABLES
const db = mongojs(dbUrl, collections);
// DB ERROR HANDLEING 
db.on("error", function (err) {
  console.log("Database error:" + error);
}); // END ERR HANDLEING

// BODY PARSER SET UP
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

// API ROUTES
app.use("/api", routes);

// MONGOOSE SETUP
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nyTimesReact");

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});