import React, { Component } from "react";
// FORM STYLE
import "./Form.css";

// FORM COMPONENT
class Form extends Component {

    render() {
        return (
            <form className="form-wrapper">
                <div className="row">
                    {/* TOPIC SEARCH */}
                    <div className="form-group form-wrapper col-sm-4">
                        <input
                            type="text"
                            onChange={this.props.handleInputChange}
                            value={this.props.value}
                            className="form-control"
                            name="topic"
                            placeholder="Topic..." />
                    </div>
                    {/* SUBMIT BUTTON */}
                    <div className="clearfix col-sm-1">
                        <button onClick={this.props.handleFormSubmit} className="btn btn-primary pull-right" type="submit">
                            Find
                    </button>
                    </div>
                </div>
            </form>
        ); // END RETRURN
    }; // END RENDER
}; // END FORM COMPONENT

export default Form;