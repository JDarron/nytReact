import React, { Component } from "react";
import API from "../../helpers/api/API";
// COMPONENTS
import Form from "../../components/Form";
import Article from "../../components/Article";
// import SavedArticle from "../../components/SavedArticle"
// ROUTES
import ArticleModel from "../../helpers/models/ArticleModel";

class Home extends Component {

    state = {
        results: [],
        topic: "",
        zeroResults: 0
    }; // END STATE

    searchNyt = query => {
        API
            .searchKeyWord(query)
            .then(res => {
                const resultsFromApi = res.data.response.docs;
                this.setState({
                    results: resultsFromApi
                });
            })
            .catch(err => console.error(err));
    }; // END NYT SEARCH

    saveArticle = id => {
        ArticleModel
            .create(id)
            .then(resp => {
                this
                    .props
                    .history
                    .push("/")
            })
            .catch(err => console.error(err));
    }; // END SUBMIT   

    handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }; // END HANDLE INPUT CHANGE

    handleFormSubmit = e => {
        e.preventDefault();
        this.searchNyt(this.state.topic);
    }; // END HANDLE FORM SUBMIT

    render() {
        if (this.state.results.length > this.state.zeroResults) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="page-header add-header text-center">
                                Search For an Article
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Form
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <Article
                                articles={this.state.results}
                                title="Results"
                                handleAtricleClick={this.saveArticle}
                                glyphicon="glyphicon glyphicon-save"
                                toolTip="Save"
                                route="/"
                            />
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                </div>
            ); // END RETURN
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="page-header add-header text-center">
                                Search For an Article
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Form
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}; // END PAGE

export default Home;