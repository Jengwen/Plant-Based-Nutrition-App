//import the components we will need
import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import RecipeMgr from "../../modules/RecipeMgr";
import { Button } from "react-bootstrap";
import "./Recipe.css"

class RecipeList extends Component {
  //define what this component needs to render
  state = {
    recipes: []
  };

   // call method to delete recipe and return refreshed list of recipes
   deleteRecipe = id => {
    RecipeMgr.softDelete(id)
    .then(() => {
     RecipeMgr.getAllRecipes().then((recipes)=> {
       this.setState({
         recipes: recipes
       })
     })
})}
  componentDidMount() {
    console.log("Recipe LIST: ComponentDidMount");
    //getAll recipes from Recipe Manager and hang on to that data; put it in state
    RecipeMgr.getAllRecipes().then(recipes => {
      this.setState({
        recipes: recipes
      });
    });
}
  render() {
    return (
      <>
        <section className="recipe-list">
          <Button
          id="create-btn"
            variant="light"
            type="submit"
            size="lg"
            onClick={() => {
              this.props.history.push("/recipes/new");
            }}
          >
            Add More Recipes
          </Button>
        </section>
        <div className="container-cards">
          {this.state.recipes.map(singleRecipe => (
             !singleRecipe.archived ?(
            <RecipeCard
              key={singleRecipe.id}
              recipeProp={singleRecipe}
              deleteRecipe={this.deleteRecipe}
              {...this.props}
            />
            ) : (
              null
            )
          ))}
        </div>
      </>
    );
  }
}

export default RecipeList;
