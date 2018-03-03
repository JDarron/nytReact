// REQUIRE THE DATABASE MODELS
const db = require("../models");

// EXPORT ALL THE CONTROLLERS
module.exports = {

    createArticle: (req, res) => {
        db.Article.create(req.body)
        .then(dbArticle=> {
          res.json(dbArticle);
        })
        .catch(function(err) {
          res.json(err);
        });
    }, // END CREATE

    findAllArticle: (req, res) => {}, // END FIND ALL

    findOneArticle: (req, res) => {}, // END FIND ONE

    deleteEmployee: (req, res) => {} // END DELETE

}; // END EXPORT