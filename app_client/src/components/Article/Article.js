import React, {Component} from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";
// FORM STYLE
import "./Article.css";

// FORM COMPONENT
class Article extends Component {

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {/* ARTICLE */}
                    <p>
                        This is an interesting article title.
                    </p>
                    {/* END ARTICLE */}
                </div>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END FORM COMPONENT

export default Article;