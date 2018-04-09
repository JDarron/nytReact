import React, { Component } from "react";
import API from "../../helpers/api/API";
// ROUTES
import ArticleModel from "../../helpers/models/ArticleModel";

class Archive extends Component {

    state = {
        apiResults: [],
        idQuery: []
    }; // END STATE

    searchNyt = query => {
        console.log(query.join(","));
        API
            .serchId(query)
            .then(res => {
                console.log(res);
                // this.setState({
                //     apiResults: [...this.state.apiResults, ]
                // // });
                // console.log("State: ")
                // console.log(this.state.apiResults);
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
                console.log(this.state.idQuery.join('", "'));

                this.searchNyt(this.state.idQuery);
            })
            .catch(err => console.error(err));
    }// END COMPONENT DID MOUNT

    render() {
        return (
            <div className="container text-center">
                <h1 className="col-sm-12 page-header add-header">
                    Archive
                </h1>
            </div>
        ); // END RETURN
    }; // END RENDER

}; // END SAVED PAGE

export default Archive;