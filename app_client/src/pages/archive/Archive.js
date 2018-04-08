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
        API
            .serchId(query)
            .then(res => {
                this.state.apiResults.push(res);
                console.log("State: ")
                console.log(this.state.apiResults);
            })
            .catch(err => console.log(err));
    }; // END NYT SEARCH

    componentDidMount = () => {
        ArticleModel
            .getAll()
            .then(resp => {

                let dbArticles = resp.data;
                let dbArticlesLength = dbArticles.length;
                const oneArticle = 1;

                console.log("This is from the db.")
                // CONSOLE LOG ERROR HANDLING
                console.log(dbArticles);

                const idArrrayForTesting = ["5ac53ecd068401528a2a27ff", "5ac53ecd068401528a2a27ff", "5aa0024f5d97b300013941eb"];
                this.searchNyt(idArrrayForTesting);

                // dbArticles.forEach(elem => {
                //     console.log(elem.articleId);
                //     this.setState({
                //         idQuery: elem.articleId
                //     })
                //     console.log();
                // });

                this
                    .props
                    .history
                    .push("/archive");
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