import React, { Component } from "react";
import NutrientRecipeCard from "./NutrientRecipeCard";
import NutrientMgr from "../../modules/NutrientMgr";
import "./Recipe.css";

class RecipeNutrientList extends Component {
  //define what this component needs to render
  state = {
    nutrientRecipes: []
  };

  componentDidMount() {
    console.log("Recipe by NutrientLIST: ComponentDidMount");
    //getAll recipes from Recipe Manager with a specific nutrient id and hang on to that data; put it in state
    NutrientMgr.getRecipebyNutrient(this.props.nutrientId).then(
      nutrientRecipes => {
        console.log(nutrientRecipes);
        this.setState({
          nutrientRecipes: nutrientRecipes
        });
      }
    );
  }
  render() {
    // return a car with recipe and url link
    return (
      <>
        <section className="recipe-list"></section>
        <div className="container-cards">
          {this.state.nutrientRecipes.map(singleRecipe =>
            !singleRecipe.archived ? (
              <NutrientRecipeCard
                key={singleRecipe.id}
                nutrientRecipeProp={singleRecipe}
                {...this.props}
                              />
            ) : null
          )}
        </div>
      </>
    );
  }
}

export default RecipeNutrientList;
