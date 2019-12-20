//import the components we will need
import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import RecipeMgr from "../../modules/RecipeMgr";
import MealTypeMgr from "../../modules/MealTypeMgr";
import Select from "react-select";
import "./Recipe.css";
import { Form } from "react-bootstrap";

class MyRecipeList extends Component {
  //define what this component needs to render
  state = {
    recipes: [],
    mealTypes: [],
    selectValues: [],
    selectValue: []
  };
  // method to gather info from search field
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  // method to collect values in dropdown selection
<<<<<<< HEAD
  _onChange(value) {
    this.setState({ selectValues: value });
  }
  // method to collect values in dropdown for multi select
  _onChanges(value) {
    console.log(value);
    this.setState({ selectValue: value });
=======
  _onChangeMeal(value) {
    this.setState({ selectValueMeal: value });
>>>>>>> master
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

<<<<<<< HEAD
     }
=======

  }
>>>>>>> master
  render() {

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

      // or if no selection is made just list all recipes for the logged in
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
          </Form>
        </section>
        <section id="my-recipe-list">
          {/* returns list of recipes by user and if filtered by filter options selected */}
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
