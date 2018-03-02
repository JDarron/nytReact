import React, {Component} from "react";
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
                        Trump supporter gets punched in the face really hard.
                    </p>
                    {/* END ARTICLE */}
                </div>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END FORM COMPONENT

export default Article;