import React, {Component} from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import {Link} from "react-router-dom";
// FORM STYLE
import "./Article.css";

// FORM COMPONENT
class Article extends Component {

    render() {


        return (
            <div> 
                {
                    this.props.article.map(artcl => {
                        return (
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    {/* ARTICLE */}
                                    <a key={artcl._id}href={artcl.web_url}>
                                        {artcl.headline.main}
                                    </a>
                                    <p>
                                        {artcl.snippet}
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