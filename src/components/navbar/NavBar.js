import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NavBar.css";
import auth0Client from "../auth/Auth";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png"

class NavBar extends Component {
  signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear();
    this.props.history.replace("/");
  };

  render() {
    return (
      <header>
        <img id="logo" src={logo} alt="leaf logo"/>
        <h1 className="site-title">
          Personalized Plant Based Nutrition
          <br />
          <small></small>
        </h1>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">
         {/* <img
        src="logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="leaf logo"/> */}
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button
                id="new-event"
                variant="light"
                size="md"
                onClick={this.signOut}
              >
                Sign Out
              </Button>
              <Nav.Link href="/users/:id">My Account</Nav.Link>
              <Nav.Link href="/recipes">Recipes</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(NavBar);
