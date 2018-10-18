import React, { Component } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

class Home extends Component {
    render() {
        return (
        <div className="home">
            <Navbar className="navbar navbar-dark bg-dark">
                <p id="title">Shawn Mangum</p>
                <Button className="btn btn-primary">My Button!</Button>
            </Navbar>
            <Jumbotron className="container-fluid">
                <Card className="card container">
                    <div className="card-body">
                        <h5 class="card-title">Shawn's Card</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p>This is a card</p>
                    </div>
                </Card>
            </Jumbotron>
        </div>
        );
    }
}

export default Home;