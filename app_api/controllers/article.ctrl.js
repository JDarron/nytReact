// REQUIRE THE DATABASE MODELS
const db = require("../models");

// EXPORT ALL THE CONTROLLERS
module.exports = {

    createArticle: (req, res) => {
        db
            .Article
            .create({title: req.body.title, link: req.body.link})
            .then(dbArticle => {
                console.log(dbArticle);
            })
            .catch(function (err) {
                return res.json(err);
            });
    }, // END CREATE

    findAllArticle: (req, res) => {}, // END FIND ALL

    findOneArticle: (req, res) => {}, // END FIND ONE

    deleteEmployee: (req, res) => {} // END DELETE

}; // END EXPORT