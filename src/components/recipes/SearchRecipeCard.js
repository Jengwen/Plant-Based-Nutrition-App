//import the components we will need
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Recipe.css";

class SearchRecipeCard extends Component {
  render() {
    return (
      // return recipe cards with link to recipes search results
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.recipeProp.recipe.image} />
          <Card.Body>
            <Card.Title>{this.props.recipeProp.recipe.label}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Link href={this.props.recipeProp.recipe.url}>
              See Recipe Here
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default SearchRecipeCard;
