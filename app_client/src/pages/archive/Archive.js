import React, {Component} from "react";
import API from "../../helpers/api/API";
// ROUTES
import ArticleModel from "../../helpers/models/ArticleModel";


class Saved extends Component {

    state = {

    }; // END STATE

    searchNyt = query => {
        API
            .serchId(query)
            .then(res => {
                this.setState({
                    results: res.data.response.docs
                });
            })
            .catch(err => console.log(err));
    }; // END NYT SEARCH

    componentDidMount = () => {
        ArticleModel
            .getAll()
            .then(resp => {
                console.log(resp);
                this
                    .props
                    .history
                    .push("/archive")
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

export default Saved;