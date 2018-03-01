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
            <div className="container-fluid text-center">
                <h1 className="page-header add-header">
                    NYTimes React Home Page
                </h1>
                <Form />
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END HOME PAGE

export default Home;