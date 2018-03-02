import React, {Component} from "react";
import "./Button.css";

class Button extends Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg" onClick={this.props.handleClick}>
                    {this.props.type}
                </button>
            </div>
        ); // END RETRURN
    }; // END RENDER
}; // END BUTTON COMPONENT

export default Button;