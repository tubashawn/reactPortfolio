import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
    <div {...props}>
    {props.children}
    </div>
);

export default Navbar;