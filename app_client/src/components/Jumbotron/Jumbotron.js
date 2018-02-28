import React, {Component} from "react";
//JUMBOTRON STYLES
import "./Jumbotron.css";

// JUMBOTRON COMPONENT
class Jumbotron extends Component {
    render() {
        return (
            <div class="jumbotron">
                <h1 class="header">
                    Welcome to Employee Track
                </h1>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END JUMBOTRON COMPONENT

// EXPORT FORM COMPONENT
export default Jumbotron;