const model = require('../models');

module.exports = {

    createArticle: (req, res) => {
        model
            .Article
            .create({
                articleId: req.body.articleId,
                read: false
            })
            .then(resArticle => res.json(resArticle))
            .catch(err => console.error(err));
    }, // END CREATE

    findAllArticle: (req, res) => {
        model
            .Article
            .find({})
            .then(resArticle => res.json(resArticle))
            .catch(err => console.error(err));
    }, // END READ ALL

    findOneArticle: (req, res) => {
        model
            .Article
            .findOne({ _id: req.params.id })
            .then(resArticle => res.json(resArticle))
            .catch(err => console.error(err));
    }, // END READ

    updateArticle: (req, res) => {
        model.Article.update(
            {
                _id: req.params.id
            },
            req.body)
            .then(resArticle => res.json(resArticle))
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteArticle: (req, res) => {
        console.log(req.params.id)
        model
            .Article
            .remove({ articleId: req.params.id })
            .then(resArticle => res.json(`Deletion of ID: ${req.params.id} was Successfull!`))
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT