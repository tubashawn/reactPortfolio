import React from "react";
import "./Card.css";

const Card = (props) => (
    <div className="card" {...props}>
        {props.children}
    </div>
);

export default Card;