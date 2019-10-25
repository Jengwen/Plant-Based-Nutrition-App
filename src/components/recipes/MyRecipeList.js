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
    selectValues: [],
    selectValue:[]
  };
  // method to gather info from search field
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
// method to collect values in dropdown selection
  _onChange(value) {
    //console.log(value) - just to see what we recive from <Select />
    this.setState({ selectValues: value });
  };
  // method to collect values in dropdown for multi select
  _onChanges(value) {
    console.log(value)
    this.setState({ selectValue: value });
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
        onChange={this._onChange.bind(this)}
        options={this.state.nutrients}
        isMulti
        name="nutrientSelect"
        className="basic-multi-select"
        classNamePrefix="select"
      />
    );
    // create select dropdown form for mealTypes in array
    const mealTypeSelect = () => (
      <Select
        options={this.state.mealTypes}
        defaultValue={this.state.mealTypes[0]}
        onChange={this._onChanges.bind(this)}
        name="mealTypeSelect"
        className="basic-single"
        classNamePrefix="select"
      />
    );
    return (
      <>
        <section id="filter">
          <Form id="recipe-filter">
            <Form.Label>Meal Type</Form.Label>
            {/* single select box for meal type */}
            {mealTypeSelect()}
            {/* multi select nutrients to tag to a recipe */}
            <Form.Label>Nutrients</Form.Label>
            {nutrientSelect()}
          </Form>
        </section>
        <section id="my-recipe-list">
          <div className="container-cards">
            {this.state.recipes.map(singleRecipe =>
              !singleRecipe.archived ? (
                <RecipeCard
                  key={singleRecipe.id}
                  recipeProp={singleRecipe}
                  deleteRecipe={this.deleteRecipe}
                  {...this.props}
                />
              ) : null
            )}
          </div>
        </section>
      </>
    );
  }
}
export default MyRecipeList;
