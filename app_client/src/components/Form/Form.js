import React, {Component} from "react";
// FORM STYLE
import "./Form.css";

// FORM COMPONENT
class Form extends Component {

    render() {

        return (
            <div class="row">
                {/* FORM PANEL */}
                <div class="panel panel-default">
                    <div class="panel-body">
                        {/* FORM */}
                        <form class="form-wrapper">
                            {/* TOPIC SEARCH */}
                            <div className="form-group row form-wrapper">
                                <label
                                    htmlFor="firstName"
                                    className="col-sm-2 col-form-label text-center form-label">
                                    Topic
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="topic"
                                        placeholder="Topic..."/>
                                </div>
                            </div>
                            {/* SUBMIT BUTTON */}
                            <div className="clearfix">
                                <button className="btn btn-primary pull-right" type="submit">
                                    Find
                                </button>
                            </div>
                        </form>
                        {/* END FORM */}
                    </div>
                </div>
                {/* END FORM PANEL */}
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END FORM COMPONENT

// EXPORT FORM COMPONENT
export default Form;