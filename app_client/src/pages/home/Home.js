import React, {Component} from "react";
import API from "../../helpers/api/API";
// COMPONENTS
import Form from "../../components/Form";
import Article from "../../components/Article"

class Home extends Component {

    componentDidMount() {
        this.nyTimesApi();
    }; // END COMPONENT DID MOUNT

    nyTimesApi = () => {
        API
            .search()
            .then(res => console.log(res.data.response.docs[0].web_url))
            .catch(err => console.log(err));
    }; // END NYTIMES API

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
                        <Form/>
                        {/* END FORM */}
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
                    <div className="col-sm-8">
                        {/* RESULTS */}
                        <div className="row">
                            <h2 className="text-center">
                                Results
                            </h2>
                        </div>
                        <Article/>
                        {/* END RESULTS */}
                    </div>
                    {/* END RESULTS */}
                </div>
                {/* END ROW TWO */}
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END HOME PAGE

export default Home;