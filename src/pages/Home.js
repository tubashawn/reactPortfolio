import React, { Component } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

class Home extends Component {
    render() {
        return (
        <div className="home">
            <Navbar className="navbar navbar-dark bg-dark">
                <p id="title">Shawn Mangum</p>
                <Button className="btn btn-primary">My Button!</Button>
            </Navbar>
        </div>
        );
    }
}

export default Home;