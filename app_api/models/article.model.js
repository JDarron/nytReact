const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ArticleSchema = new Schema({

	articleId: {
		type: String,
		required: true
	},

	read: {
		type: Boolean,
	}
	
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
