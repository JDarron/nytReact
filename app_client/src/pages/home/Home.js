import React, {Component} from "react";
import API from "../../helpers/api/API";

class Home extends Component {

    componentDidMount() {
        this.nyTimesApi();
    }

    nyTimesApi = () => {
        API
            .search()
            .then(res => console.log(res.data.data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container-fluid text-center">
                <h1>
                    NYTimes React Home Page
                </h1>
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END HOME PAGE

export default Home;