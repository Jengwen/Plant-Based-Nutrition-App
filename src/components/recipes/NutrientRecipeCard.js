//import the components we will need
import React, { Component } from "react";
import RecipeMgr from "../../modules/RecipeMgr";
import Microlink from "@microlink/react";

class NutrientRecipeCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Title:{" "}
            <span className="card-recipe">{this.props.recipeProp.recipe.title}</span>
          </h3>
          <Microlink url={this.props.recipeProp.recipe.url} size="normal"/>

        </div>
      </div>
    );
  }
}
export default NutrientRecipeCard;