require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const apiRoutes = require('./app_api/routes/article.route')


const port = process.env.PORT || 3001

const MONGODB_URI = 'mongodb://localhost/nyTimesReact'

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, './app_client/build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './app_client/build', 'index.html'))
})


mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to Mongo database'))
    .catch(err => {
        console.error(err)
    })


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})