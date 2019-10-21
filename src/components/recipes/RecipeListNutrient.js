import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import NutrientMgr from "../../modules/NutrientMgr";
import "./Recipe.css"

class RecipeNutrientList extends Component {
  //define what this component needs to render
  state = {
    recipes: []
  };

  componentDidMount() {
    console.log("Recipe by NutrientLIST: ComponentDidMount");
    //getAll recipes from Recipe Manager and hang on to that data; put it in state
    NutrientMgr.getNutrientId(id).then(nutrientRecipes => {
      this.setState({
        recipes: nutrientRecipes
      });
    });
}
  render() {
    return (
      <>
        <section className="recipe-list">
        </section>
        <div className="container-cards">
          {this.state.recipes.map(singleRecipe => (
            <RecipeCard
              key={singleRecipe.id}
              recipeProp={singleRecipe}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default RecipeNutrientList;
