//import the components we will need
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Microlink from "@microlink/react";
import "./Recipe.css";

class RecipeCard extends Component {

  render() {
    // return reusable recipe card to display recipe micro links
    return (
      <div className="card">
        <div className="card-content" id="card-content">
          <h3>
            {" "}
            <span className="card-recipe">{this.props.recipeProp.label}</span>
          </h3>
          <Microlink url={this.props.recipeProp.url} size="normal"/>
          {/* add delete button */}
          <Button
            variant="light"
            type="submit"
            id="delete-btn"
            size="lg"
            onClick={()=>{this.props.deleteRecipe(this.props.recipeProp.id)}}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}
export default RecipeCard;
