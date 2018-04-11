import React, { Component } from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
import { Link } from "react-router-dom";
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
// FORM STYLE
import "./Article.css";

// FORM COMPONENT
class Article extends Component {

    render() {
        return (

            // <Table responsive>
            //     <thead>
            //         <tr>
            //             <th>
            //                 {this.props.title}
            //             </th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {
            //             this.props.articles.map(artcl => {
            //                 //console.log(artcl);
            //                 return (

            //                     <tr key={artcl._id.toString()}>
            //                         <td>
            //                             <div className="col-sm-11">
            //                                 <a href={artcl.web_url} target="_blank">
            //                                     {artcl.headline.main}
            //                                 </a>
            //                                 <p>
            //                                     {artcl.snippet}
            //                                 </p>
            //                             </div>
            //                             <div className="col-sm-1">
            //                                 <Link
            //                                     className="btn btn-primary btn-lg"
            //                                     onClick={this.props.handleAtricleClick.bind(this, artcl._id)}
            //                                     to="/">
            //                                     <span className={this.props.glyphicon}></span>
            //                                 </Link>
            //                             </div>
            //                         </td>
            //                     </tr>
            //                 ); // END RETURN
            //             }) // END RENDER IMAGE
            //         }
            //     </tbody>
            // </Table>
        ); // END RETURN

    }; // END RENDER
}; // END FORM COMPONENT

export default Article;