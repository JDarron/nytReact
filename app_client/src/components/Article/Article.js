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

                            <div className="row">
                                <div className="col-sm-11">
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
                                </div>
                                <div className="col-sm-1">
                                    <Link class="btn btn-primary btn-lg" to={`/`}>
                                        <span className="glyphicon glyphicon glyphicon-floppy-disk"></span>
                                    </Link>
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