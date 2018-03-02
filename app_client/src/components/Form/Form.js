import React, {Component} from "react";
// FORM STYLE
import "./Form.css";
import Button from "../Button/Button"

// FORM COMPONENT
class Form extends Component {

    render() {

        return (
            <div>
                <form class="form-wrapper">

                    {/* FIRST NAME */}
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

                    <div className="form-group row form-wrapper">

                        <div className="col-xs-6">
                            <div className="row">
                                <div className='col-sm-6'>
                                    <div className="form-group">
                                        <div className='input-group date' id='datetimepicker1'>
                                            <label
                                                htmlFor="from"
                                                className="col-sm-2 col-form-label text-center form-label">
                                                From
                                            </label>
                                            <input type='text' className="form-control"/>
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="row">
                                <div className='col-sm-6'>
                                    <div className="form-group">
                                        <div className='input-group date' id='datetimepicker1'>
                                            <input type='text' className="form-control"/>
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="clearfix">
                        <button className="btn btn-primary pull-right" type="submit">
                            Find
                        </button>
                        <Button className="btn btn-primary pull-right" type="Find"/>
                    </div>

                </form>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END FORM COMPONENT

// EXPORT FORM COMPONENT
export default Form;