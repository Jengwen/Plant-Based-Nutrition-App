import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NavBar.css";
import auth0Client from "../auth/Auth";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear();
    this.props.history.replace("/");
  };

  render() {
    return (
      <header className="media">
        <div className="media-body">
          <h1 className="media-heading">Personalized Plant Based Nutrition</h1>
<Navbar id= "nav"  expand="lg">
            <Navbar.Brand id= "nav" href="/home"></Navbar.Brand>
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
                <NavDropdown title="Recipes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/recipes">Recipes</NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/new">
                    Add A Recipe
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/search">
                    Find A Recipe
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/myRecipes">
                    My Recipes
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/resources">Resources</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default withRouter(NavBar);
