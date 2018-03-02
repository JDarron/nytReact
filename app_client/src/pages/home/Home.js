
import React, {Component} from "react";
import API from "../../helpers/api/API";
import Form from "../../components/Form";

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
            <div className="container text-center">
                {/* ROW ONE */}
                <div className="row">
                    <h1 className="col-sm-12 page-header add-header">
                        Search For an Article
                    </h1>
                </div>
                {/* END ROW ONE */}

                {/* ROW TWO */}
                <div className="row">
                    {/* SEARCH FOR ARTICLE */}
                    <div className="col-sm-4">
                        {/* FORM */}
                        <Form />
                        {/* END FORM */}
                        {/* SAVED */}
                        <p>
                            Saved Artices go here
                        </p>
                        {/* END SAVED */}
                    </div>
                    {/* END SEARCH FOR ARTICLE */}

                    {/* RESULTS */}
                    <div className="col-sm-6">
                        {/* RESULTS */}
                            <p>
                                Search Results Go here
                            </p>
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