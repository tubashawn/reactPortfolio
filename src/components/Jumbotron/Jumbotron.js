import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
    <div {...props}>
        {props.children}
    </div>
);

export default Jumbotron;