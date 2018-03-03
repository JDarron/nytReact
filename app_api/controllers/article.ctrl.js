const db = require('../models');

module.exports = {

    createArticle: (req, res) => {

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
    }

};