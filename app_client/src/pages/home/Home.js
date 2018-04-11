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
        topic: ""
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
            .catch(err => console.log(err));
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

    handleAtricleSave = artclId => {
        this.saveArticle(artclId);
    }; // END HANDLE ARTICLE SAVE

    render() {
        if (this.state.results.length > 0) {
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
                        <div className="col-sm-12">
                            <div className="row">
                                <h2>
                                    Search
                        </h2>
                            </div>
                            {/* FORM */}
                            <Form
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit} />
                        </div>
                        {/* END SEARCH FOR ARTICLE */}
                    </div>
                    <div className="Row">
                        {/* RESULTS */}
                        <div className="col-sm-12">
                            {/* RESULTS */}
                            <Article
                                articles={this.state.results}
                                title="Results"
                                handleAtricleClick={this.handleAtricleSave}
                                glyphicon="glyphicon glyphicon glyphicon-floppy-disk"
                            /> {/* END RESULTS */}
                        </div>
                        {/* END RESULTS */}
                    </div>
                    {/* END ROW TWO */}
                </div>
            ); // END RETURN
        } else {
            return (
                <div className="container">
                    {/* ROW ONE */}
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="page-header add-header text-center">
                                Search For an Article
                            </h1>
                        </div>
                    </div>
                    {/* END ROW ONE */}
                    {/* ROW TWO */}
                    {/* SEARCH FOR ARTICLE */}
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>
                                Search
                            </h2>
                        </div>
                    </div>
                    {/* FORM */}
                    <div className="row">
                        <div className="col-sm-12">
                            <Form
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit} />
                        </div>
                    </div>
                    {/* END SEARCH FOR ARTICLE */}
                </div>
            );
        }
    }






    // return (
    //     // <div className="container">
    //     //     {/* ROW ONE */}
    //     //     <div className="row">
    //     //         <h1 className="col-sm-12 page-header add-header text-center">
    //     //             Search For an Article
    //     //         </h1>
    //     //     </div>
    //     //     {/* END ROW ONE */}

    //     //     {/* ROW TWO */}
    //     //     <div className="row">
    //     //         {/* SEARCH FOR ARTICLE */}
    //     //         <div className="col-sm-12">
    //     //             <div className="row">
    //     //                 <h2>
    //     //                     Search
    //     //                 </h2>
    //     //             </div>
    //     //             {/* FORM */}
    //     //             <Form
    //     //                 value={this.state.search}
    //     //                 handleInputChange={this.handleInputChange}
    //     //                 handleFormSubmit={this.handleFormSubmit} />
    //     //         </div>
    //     //         {/* END SEARCH FOR ARTICLE */}
    //     //     </div>
    //     //     <div className="Row">
    //     //         {/* RESULTS */}
    //     //         <div className="col-sm-12">
    //     //             {/* RESULTS */}
    //     //             <Article
    //     //                 articles={this.state.results}
    //     //                 title="Results"
    //     //                 handleAtricleClick={this.handleAtricleSave}
    //     //                 glyphicon="glyphicon glyphicon glyphicon-floppy-disk"
    //     //             /> {/* END RESULTS */}
    //     //         </div>
    //     //         {/* END RESULTS */}
    //     //     </div>
    //     //     {/* END ROW TWO */}
    //     // </div>
    // ); // END RETURN
}; // END PAGE

export default Home;