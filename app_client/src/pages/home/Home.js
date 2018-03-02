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
                <div className="row">
                    <h1 className="col-sm-12 page-header add-header">
                        Search For an Article
                    </h1>
                </div>

                <div className="col-xs-12 col-sm-4">
                    <Form/>
                </div>

            </div>
        ); // END RETURN
    }; // END RENDER
}; // END HOME PAGE

export default Home;