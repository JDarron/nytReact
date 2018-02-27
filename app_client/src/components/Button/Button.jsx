import React, {Component} from "react";
import "./Button.css";

const Button = props => {
    return (
        <div>
            <button className={props.type}>
                {props.name}
            </button>                     
        </div>
    );
};

export default Button;