// =====================================================================================
// DEPENDENCIES
// =====================================================================================
const express = require('express')
    , bodyParser = require('body-parser')
    , logger = require('morgan')
    , mongoose = require('mongoose')
    , apiRoutes = require('./app_api/routes/article.route')
    , isDev = process.env.NODE_ENV === 'development';

// set port
const port = process.env.PORT || 3001;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nyTimesReact';

// =====================================================================================
// MIDDLEWARE
// =====================================================================================
// initialize express
const app = express();

// // configure body parser to parse requests as json
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // configure morgan to log requests to console
// app.use(logger('dev'));

// // serve up 'public' folder
// app.use(express.static('./app_client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger('dev'));
app.use(apiRoutes);
if (isDev) {
    app.use(express.static('app_client/public'));
}
app.use(express.static('app_client/build'));

// =====================================================================================
// MONGOOSE CONFIG
// =====================================================================================
// set up mongoose to leverage built-in JavaScript ES6 Promises
mongoose.Promise = Promise;

// connect to the MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to Mongo database');
    })
    .catch(err => {
        console.error(err);
    });

// =====================================================================================
// ROUTES
// =====================================================================================
app.use('/api', apiRoutes);

// =====================================================================================
// LISTENING
// =====================================================================================
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// adding notes to push to repo.