import React, { Component } from "react";
import API from "../../helpers/api/API";
import Article from "../../components/Article";

// ROUTES
import ArticleModel from "../../helpers/models/ArticleModel";

class Archive extends Component {

    state = {
        results: [],
        idQuery: []
    }; // END STATE

    searchNyt = query => {
        API
            .serchId(query)
            .then(res => {
                const resultsFromApi = res.data.response.docs;
                this.setState({
                    results: resultsFromApi
                });
                console.log(this.state.results);
            })
            .catch(err => console.log(err));
    }; // END NYT SEARCH

    pushArticleIdToState = dbArticles => {
        return dbArticles.forEach(elem => {
            this.setState({
                idQuery: [...this.state.idQuery, elem.articleId]
            }); // END SET STATE
        }); // END FOR EACH
    }; // END PUSH

    componentDidMount = () => {
        ArticleModel
            .getAll()
            .then(resp => {
                const articlesForPushing = resp.data;
                this.pushArticleIdToState(articlesForPushing);
            })
            .then(() => {
                return this.searchNyt(this.state.idQuery);
            })
            .catch(err => console.error(err));
    }// END COMPONENT DID MOUNT

    handleAtricleDelete = () => {
        console.log("In the handle delete function.");
    }; // END HANDLE DELETE

    render() {
        return (
            <div className="container">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-10">
                    <Article
                        articles={this.state.results}
                        title="Archive"
                        handleAtricleClick={this.handleAtricleDelete}
                        handleLinkClick={this.scrapeArticleFromPage}
                        glyphicon="glyphicon glyphicon-trash"
                        toolTip="Delete"
                    />
                </div>
                <div className="col-sm-1">
                </div>
            </div>
        ); // END RETURN
    }; // END RENDER

}; // END SAVED PAGE

export default Archive;