import React, {Component} from "react";
import API from "../../helpers/api/API";
// COMPONENTS
import Form from "../../components/Form";
import Article from "../../components/Article";
// ROUTES
import ArticleModel from "../../helpers/models/ArticleModel";

let queryResults = [];

class Home extends Component {

    state = {
        result: {},
        topic: "",
        article: {
            title: "",
            link: "",
            nytId: "",
        }
    }; // END STATE

    /*
        ==========================================
        API CALLS
        ==========================================
    */
   
    searchNyt = query => {
        API
            .search(query)
            .then(res => {
                queryResults = [];
                // FOR EACH OF THE ITEMS IN THE RESULT ARRAY
                // PUSH THEM TO THE QUERY RESULTS ARRAY
                console.log(res);
                res.data.response.docs.forEach(element => {
                    queryResults.push(element);
                }); // FOR EACH STATEMENT
                console.log(queryResults);
                this.setState({
                    result: res.data
                });
            })
            .catch(err => console.log(err));
    }; // END NYT SEARCH

    saveArticle = () => {
        ArticleModel
            .create(this.state.article)
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
        this.setState({[name]: value});
    }; // END HANDLE INPUT CHANGE

    handleFormSubmit = e => {
        e.preventDefault();
        this.searchNyt(this.state.topic);
    }; // END HANDLE FORM SUBMIT

    saveArticle = e => {

    }; // END ARTICLE CLICK

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
                            handleFormSubmit={this.handleFormSubmit}/> {/* END FORM */}
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
                            article={queryResults}
                            title="Results"
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