import React, { Component } from "react";
import API from "../../helpers/api/API";
// COMPONENTS
import Form from "../../components/Form";
import Article from "../../components/Article";
// ROUTES
import ArticleModel from "../../helpers/models/ArticleModel";


class Home extends Component {

    state = {
        results: [],
        topic: ""
    }; // END STATE

    /*
        ==========================================
        API CALLS
        ==========================================
    */

    searchNyt = query => {
        API
            .searchKeyWord(query)
            .then(res => {
                this.setState({
                    results: res.data.response.docs
                });
            })
            .catch(err => console.log(err));
    }; // END NYT SEARCH

    saveArticle = (id) => {
        ArticleModel
            .create(id)
            .then(resp => {
                this
                    .props
                    .history
                    .push("/")
            })
            .catch(err => console.error(err));
        // BUILD OUT THE HANDLE SAVE BUTTON FOR THE ARTICLE        
    }; // END SUBMIT   

    /*
        ==========================================
        ON CLICK FUNCTIONS
        ==========================================
    */

    handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }; // END HANDLE INPUT CHANGE

    handleFormSubmit = e => {
        e.preventDefault();
        this.searchNyt(this.state.topic);
    }; // END HANDLE FORM SUBMIT

    handleAtricleSave = (artclId) => {
        this.saveArticle(artclId);
    }; // END HANDLE ARTICLE SAVE

    render() {
        return (
            <div className="container">
                {/* ROW ONE */}
                <div className="row">
                    <h1 className="col-sm-12 page-header add-header text-center">
                        Search For an Article
                    </h1>
                </div>
                {/* END ROW ONE */}
                {/* ROW TWO */}
                <div className="row">
                    {/* SEARCH FOR ARTICLE */}
                    <div className="col-sm-4">
                        <div className="row">
                            <h2 className="text-center">
                                Search
                            </h2>
                        </div>
                        {/* FORM */}
                        <Form
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit} /> {/* END FORM */}
                        {/* SAVED */}
                        <div className="row">
                            <h3 className="text-center">
                                Saved Artices go here
                            </h3>
                        </div>
                        {/* END SAVED */}
                    </div>
                    {/* END SEARCH FOR ARTICLE */}
                    {/* RESULTS */}
                    <div className="col-sm-7">
                        {/* RESULTS */}
                        <Article
                            articles={this.state.results}
                            title="Results"
                            handleAtricleSave={this.handleAtricleSave}
                        /> {/* END RESULTS */}
                    </div>
                    {/* END RESULTS */}
                </div>
                {/* END ROW TWO */}
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END HOME PAGE

export default Home;