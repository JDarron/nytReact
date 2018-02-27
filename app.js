// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
// DB MODELS
const db = require("./app_api/models");
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