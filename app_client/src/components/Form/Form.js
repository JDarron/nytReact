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
                                readOnly={readOnly}
                                value={this.props.employee.firstName}
                                type="text"
                                className="form-control"
                                name="firstName"
                                placeholder="First Name..."
                                onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    {/* LAST NAME */}
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label text-center form-label">
                            Last Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                readOnly={readOnly}
                                value={this.props.employee.lastName}
                                type="text"
                                className="form-control"
                                name="lastName"
                                placeholder="Last Name..."
                                onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    {/* AGE */}
                    <div className="form-group row">
                        <label htmlFor="age" className="col-sm-2 col-form-label text-center form-label">
                            Age
                        </label>
                        <div className="col-sm-10">
                            <input
                                readOnly={readOnly}
                                value={this.props.employee.age}
                                type="text"
                                className="form-control"
                                name="age"
                                placeholder="Age..."
                                onChange={this.props.handleChange}/>
                        </div>
                    </div>
                    {/* JOB TITLE */}
                    <div className="form-group row">
                        <label htmlFor="jobTitle" className="col-sm-2 col-form-label text-center form-label">
                            Job Title
                        </label>
                        <div className="col-sm-10">
                            <input
                                readOnly={readOnly}
                                value={this.props.employee.jobTitle}
                                type="text"
                                className="form-control"
                                name="jobTitle"
                                placeholder="Job Title..."
                                onChange={this.props.handleChange}/>
                        </div>
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