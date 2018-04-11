import React, { Component } from "react";
// LINK FROM REACT ROUTER TO LINK TO ROUTE
// import { Link } from "react-router-dom";
import { PanelGroup, Panel, Table } from 'react-bootstrap';
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
                    this.props.articles.map(artcl => {
                        //console.log(artcl);
                        return (

                            // <PanelGroup accordion id="accordion-example" className="row" key={artcl._id.toString()}>
                            //     <Panel eventKey="1">
                            //         <Panel.Heading>
                            //             <Panel.Title toggle>
                            //                 {artcl.headline.main}
                            //             </Panel.Title>
                            //         </Panel.Heading>
                            //         <Panel.Body collapsible>
                            //             {artcl.snippet}
                            //         </Panel.Body>
                            //     </Panel>
                            // </PanelGroup>

                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                </tbody>
                            </Table>

                            // <div className="row" key={artcl._id.toString()}>
                            //     <div className="col-sm-11">
                            //         <div className="panel panel-default">
                            //             <div className="panel-body">
                            //                 {/* ARTICLE */}
                            //                 <a href={artcl.web_url} target="_blank">
                            //                     {artcl.headline.main}
                            //                 </a>
                            //                 <p>
                            //                     {artcl.snippet}
                            //                 </p>
                            //                 {/* END ARTICLE */}
                            //             </div>
                            //         </div>
                            //     </div>
                            //     <div className="col-sm-1">
                            //         <Link 
                            //         className="btn btn-primary btn-lg" 
                            //         onClick={this.props.handleAtricleClick.bind(this, artcl._id)}  
                            //         to="/">
                            //             <span className={this.props.glyphicon}></span>
                            //         </Link>
                            //     </div> 
                            // </div>

                        ); // END RETURN
                    }) // END RENDER IMAGE
                }
            </div>
        ); // END RETURN

    }; // END RENDER
}; // END FORM COMPONENT

export default Article;