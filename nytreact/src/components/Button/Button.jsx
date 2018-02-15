import React, {Component} from "react";
import "./Button.css";

const Button = props => {
    return (
        <div>
            <button>
                {props.type}
            </button>                     
        </div>
    );
};

export default Button;