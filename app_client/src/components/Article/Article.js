import React, { Component } from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import { Link } from "react-router-dom";
import { Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
// FORM STYLE
import "./Article.css";

// FORM COMPONENT
class Article extends Component {



    render() {

    const tooltip = (
        <Tooltip id="tooltip">
            {this.props.toolTip}
        </Tooltip>
    );
    
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>
                            {this.props.title}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.articles.map(artcl => {
                            return (

                                <tr key={artcl._id.toString()}>
                                    <td>
                                        <div className="col-sm-11">
                                            <a href={artcl.web_url} target="_blank">
                                                {artcl.headline.main}
                                            </a>
                                            <p>
                                                {artcl.snippet}
                                            </p>
                                        </div>
                                        <div className="col-sm-1">
                                            <OverlayTrigger placement="right" overlay={tooltip}>
                                                <Link
                                                    className="btn btn-primary btn-md"
                                                    onClick={this.props.handleAtricleClick.bind(this, artcl._id)}
                                                    to="/"
                                                    overlay={this.tooltip}>
                                                    <span className={this.props.glyphicon}></span>
                                                </Link>
                                            </OverlayTrigger>

                                        </div>
                                    </td>
                                </tr>
                            ); // END RETURN
                        }) // END RENDER IMAGE
                    }
                </tbody>
            </Table>

        ); // END RETURN

    }; // END RENDER
}; // END FORM COMPONENT

export default Article;