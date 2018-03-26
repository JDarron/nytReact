const db = require('../models');

module.exports = {

    createArticle: (req, res) => {
        db
            .Article
            .create({ title: req.body.title, link: req.body.link, read: false })
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => console.error(err));
    }, // END CREATE

    findAllArticle: (req, res) => {
        db
            .Article
            .find({})
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => console.error(err));
    }, // END READ ALL

    findOneArticle: (req, res) => {
        db
            .Article
            .findOne({ _id: req.params.id })
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => console.error(err));
    }, // END READ

    updateArticle: (req, res) => {
        db.Article.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteArticle: (req, res) => {
        console.log(req.params.id)
        db
            .Article
            .remove({ _id: req.params.id })
            .then(dbArticle => {
                res.json(dbArticle);
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT