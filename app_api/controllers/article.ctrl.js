const db = require('../models');

module.exports = {

    createArticle: (req, res) => {
        // LOGGING THE BODY FOR DEBUGGING
        console.log("body: ", req.body);
        db
            .Article
            .create(req.body)
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => {
                console.error(err);
            });
    },

    findAllArticle: (req, res) => {
        db
            .Employee
            .findAll({})
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END FIND ALL

    findOneArticle: (req, res) => {
        db
            .Employee
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END FIND ONE

    deleteArticle: (req, res) => {
        console.log(req.params.id)
        db
            .Article
            .remove({ _id: req.body.id })
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => {
                console.error(err);
            });
    } // END DELETE

}; // END EXPORT