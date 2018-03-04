const db = require('../models');

module.exports = {

    createArticle: (req, res) => {
        // LOGGING THE BODY FOR DEBUGGING
        console.log("body: ", req.body);
        db
            .Article
            .create({title: req.body.title, link: req.body.link, read: false})
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => {
                console.error(err);
            });
    },

    findAllArticle: (req, res) => {
        db
            .Article
            .find({})
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END FIND ALL

    findOneArticle: (req, res) => {
        db
            .Article
            .findOne({_id: req.params.id})
            .then(dbArticle => {
                // If we were able to successfully find an Article with the given id, send it back to the client
                res.json(dbArticle);
              })
              .catch(function(err) {
                // If an error occurred, send it to the client
                res.json(err);
              });
    }, // END FIND ONE

    deleteArticle: (req, res) => {
        console.log(req.params.id)
        db
            .Article
            .remove({_id: req.params.id})
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => {
                console.error(err);
            });
    } // END DELETE

}; // END EXPORT