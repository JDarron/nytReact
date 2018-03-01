import React, {Component} from "react";
// FORM STYLE
import "./Form.css";

// FORM COMPONENT
class Form extends Component {

    render() {

        return (
            <div>
                <form class="form-wrapper">
                    {/* FIRST NAME */}
                    <div className="form-group row form-wrapper">
                        <label htmlFor="firstName" className="col-sm-2 col-form-label text-center form-label">
                            First Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                placeholder="First Name..."/>
                        </div>
                    </div>
                    
                    <div className="form-group row form-wrapper">
                        <div className="col-xs-2">

                        </div>

                        <div className="col-xs-2">
                        
                        </div>





                    {/* SUBMIT BUTTON */}
                    <div className="clearfix">
                        <button
                            onClick={this.props.handleSubmit}
                            className="btn btn-primary pull-right"
                            type="submit">
                            Create
                        </button>
                    </div>

                </form>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END FORM COMPONENT

// EXPORT FORM COMPONENT
export default Form;