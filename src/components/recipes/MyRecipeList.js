//import the components we will need
import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import RecipeMgr from "../../modules/RecipeMgr";
import MealTypeMgr from "../../modules/MealTypeMgr";
import NutrientMgr from "../../modules/NutrientMgr";
import Select from "react-select";
import "./Recipe.css";
import { Form } from "react-bootstrap";

class MyRecipeList extends Component {
  //define what this component needs to render
  state = {
    recipes: [],
    nutrients: [],
    mealTypes: [],
    selectValueNut: [],
    selectValueMeal: []
  };
  // method to gather info from search field
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  // method to collect values in dropdown selection
  _onChangeNut(value) {
    //console.log(value) - just to see what we recive from <Select />
    this.setState({ selectValueNut: value });
  }
  // method to collect values in dropdown for multi select
  _onChangeMeal(value) {
    this.setState({ selectValueMeal: value });
  }
  // call method to delete recipe and return refreshed list of recipes by Userid
  deleteRecipe = id => {
    RecipeMgr.softDelete(id).then(() => {
      RecipeMgr.getAllMyRecipes().then(recipes => {
        this.setState({
          recipes: recipes
        });
      });
    });
  };
  // method to change state as user types in the search field
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    console.log("Recipe LIST: ComponentDidMount");
    //getMyrecipes from Recipe Manager and hang on to that data; put it in state
    RecipeMgr.getAllMyRecipes().then(recipes => {
      console.log(recipes);
      this.setState({
        recipes: recipes
      });
    });
    // fetch all of the possible meal types
    MealTypeMgr.getAllMealTypes().then(mealTypes => {
      console.log(mealTypes);
      this.setState({
        mealTypes: mealTypes
      });
    });

    // fetch all possible nutrients to select while creating a recipe and put in array
    NutrientMgr.getAllNutrients().then(nutrients => {
      this.setState({
        nutrients: nutrients
      });
    });
  }
  render() {
    // create selection dropdown form for nutrients in array
    const nutrientSelect = () => (
      <Select
        onChange={this._onChangeNut.bind(this)}
        options={this.state.nutrients}
        name="nutrientSelect"
        className="basic-single"
        classNamePrefix="select"
      />
    );
    // create select dropdown form for mealTypes in array
    const mealTypeSelect = () => (
      <Select
        options={this.state.mealTypes}
        defaultValue={this.state.mealTypes[0]}
        onChange={this._onChangeMeal.bind(this)}
        name="mealTypeSelect"
        className="basic-single"
        classNamePrefix="select"
      />
    );
    // filter through user's recipes by mealtypes and return only those recipe cards
    const recipesByType = this.state.recipes.filter(function(recipe) {
      // if a selection is made in the meal type selection map through those
      // or if no selection is made just list all recipes for the logged in user
      return recipe.mealTypeId === 1;
    });
    console.log(recipesByType);

    return (
      <>
        <section id="filter">
          {/* filter select boxes to filter recipes */}
          <Form id="recipe-filter">
            <Form.Label id="filter-label">Filter By Meal Type</Form.Label>
            {/* single select box for meal type */}
            {mealTypeSelect()}
            {/* multi select nutrients to tag to a recipe */}
            <Form.Label id="filter-label">Filter By Nutrients</Form.Label>
            {nutrientSelect()}
          </Form>
        </section>
        <section id="my-recipe-list">
          {/* returns list of recipes by user or if filtered by filter options selected */}
          <div className="container-cards">
               {this.state.recipes.map(singleRecipe => (
                  <RecipeCard
                    key={singleRecipe.id}
                    recipeProp={singleRecipe}
                    deleteRecipe={this.deleteRecipe}
                    {...this.props}
                  />
                ))}
          </div>
        </section>
      </>
    );
  }
}
export default MyRecipeList;
