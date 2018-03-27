const model = require('../models');

module.exports = {

    createArticle: (req, res) => {
        model
            .Article
            .create({
                title: req.body.title,
                nytId: req.body.nytId,
                read: false
            })
            .then(modelArticle => res.json(modelArticle))
            .catch(err => console.error(err));
    }, // END CREATE

    findAllArticle: (req, res) => {
        model
            .Article
            .find({})
            .then(modelArticle => res.json(modelArticle))
            .catch(err => console.error(err));
    }, // END READ ALL

    findOneArticle: (req, res) => {
        model
            .Article
            .findOne({ _id: req.params.id })
            .then(modelArticle => res.json(modelArticle))
            .catch(err => console.error(err));
    }, // END READ

    updateArticle: (req, res) => {
        model.Article.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(modelArticle => res.json(modelArticle))
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteArticle: (req, res) => {
        console.log(req.params.id)
        model
            .Article
            .remove({ _id: req.params.id })
            .then(modelArticle => res.json(modelArticle))
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT