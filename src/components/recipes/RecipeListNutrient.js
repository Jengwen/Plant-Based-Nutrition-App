import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import NutrientMgr from "../../modules/NutrientMgr";
import "./Recipe.css"

class RecipeNutrientList extends Component {
  //define what this component needs to render
  state = {
    nutrientRecipes: []
  };

  componentDidMount() {
    console.log("Recipe by NutrientLIST: ComponentDidMount");
    //getAll recipes from Recipe Manager with a specific nutrient id and hang on to that data; put it in state
    NutrientMgr.getRecipebyNutrient(1).then(nutrientRecipes => {
      this.setState({
        nutrientRecipes: nutrientRecipes
      });
    });
}
  render() {
    return (
      <>
        <section className="recipe-list">
        </section>
        <div className="container-cards">
          {this.state.nutrientRecipes.map(singleRecipe => (
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
