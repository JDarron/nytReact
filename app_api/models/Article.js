var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

	articleId: {
		type: String,
		required: true
	},

	read: {
		type: Boolean,
	}
	
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
