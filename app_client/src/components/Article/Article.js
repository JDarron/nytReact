import React, {Component} from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";
// FORM STYLE
import "./Article.css";

// FORM COMPONENT
class Article extends Component {

    render() {


        return (
            <div> {
            this
            .props
            .article
            .map(artcl => {
                // RETURN THIS COMPONENT
                return (
                    <div className="panel panel-default">
                        <div className="panel-body">
                            {/* ARTICLE */}
                            <p>
                                {artcl.headline.main}
                            </p>
                            {/* END ARTICLE */}
                        </div>
                    </div>
                ); // END RETURN
            }) // END RENDER IMAGE
        }
            </div>
        ); // END RETURN

    }; // END RENDER
}; // END FORM COMPONENT

export default Article;