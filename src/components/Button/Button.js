import React from "react";

const Button = (props) => (
    <div className="btn" {...props}>
    {props.children}
    </div>
);

export default Button;