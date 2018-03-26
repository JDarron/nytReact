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
                <div className="row">
                    <h2 className="text-center">
                        {this.props.title}
                    </h2>
                </div>
                {
                    this.props.article.map(artcl => {
                        return (

                            <div className="row" key={artcl._id.toString()}>
                                <div className="col-sm-11">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            {/* ARTICLE */}
                                            <a href={artcl.web_url} target="_blank">
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
                                    <Link className="btn btn-primary btn-lg" to={`/`}>
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