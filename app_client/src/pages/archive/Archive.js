import React, { Component } from "react";
import API from "../../helpers/api/API";
import Article from "../../components/Article";

// ROUTES
import ArticleModel from "../../helpers/models/ArticleModel";

const initialState = {
    results: [],
    idQuery: []
};

class Archive extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }; // END STATE

    searchNyt = id => {
        API
            .serchId(id)
            .then(res => {
                let resultsFromApi = res.data.response.docs;
                this.setState({
                    results: resultsFromApi
                });
            })
            .catch(err => console.log(err));
    }; // END NYT SEARCH

    pushArticleIdToState = dbArticles => {
        dbArticles.forEach(elem => {
            this.setState({
                idQuery: [...this.state.idQuery, elem.articleId]
            }); // END SET STATE
        }); // END FOR EACH
    }; // END PUSH

    componentDidMount = () => {
        this.getAllArticlesFromDatabase();
    }; // END MOUNT

    getAllArticlesFromDatabase = () => {
        ArticleModel
            .getAll()
            .then(res => {
                this.pushArticleIdToState(res.data);
            })
            .then(() => {
                return this.searchNyt(this.state.idQuery);
            })
            .catch(err => console.error(err));
    }; // END GET ARTICLES

    removeArticleFromResults = id => {
        const i = this.state.results.findIndex((elem) => {
            return elem._id === id;
        });
        this.state.results.splice(i, 1);
        this.setState({ results: this.state.results });
    }; // END REMOOVE ARTICLE FROM RESULTS

    handleAtricleDelete = id => {
        ArticleModel
            .delete(id)
            .then(res => {
                this.removeArticleFromResults(id);
            })
            .catch(err => console.error(err));
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
                        glyphicon="glyphicon glyphicon-trash"
                        toolTip="Delete"
                        route="/archive"
                    />
                </div>
                <div className="col-sm-1">
                </div>
            </div>
        ); // END RETURN
    }; // END RENDER

}; // END SAVED PAGE

export default Archive;