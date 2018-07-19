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

// configure body parser to parse requests as json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
// serve up 'public' folder
if (isDev) {
    app.use(express.static('./app_client/public'));
}
app.use(express.static('./app_client/build'));

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