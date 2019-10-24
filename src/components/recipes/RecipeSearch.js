import React, { Component } from "react";
import APIMgr from "../../modules/APIMgr";
import UserMgr from "../../modules/UserMgr";
import RecipeCard from "./RecipeCard";
import { Form } from "react-bootstrap";

class RecipeSearch extends Component {
  state = {
    title: "",
    url: "",
    userId: "",
    nutrientRecipes: [],
    mealRecipes: []
  };
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  // fetch recipes by meal type from external API
  getRecipebyMealType = () => {
    APIMgr.getRecipebyMealType().then(mealRecipes => {
      this.setState({
        mealRecipes: mealRecipes
      });
    });
  };
  componentDidMount() {
    // fetch the logged in user's id to attach to saved recipes
    UserMgr.getOne().then(singleUser => {
      this.setState({
        userId: singleUser.id
      });
    });
  }
  render() {
    // return form to create a new recipe
    return (
      <>
        <section id="search-area">
          {/* search input field to search external API */}
          <h3 id="search-header">Find More Recipes</h3>
          <div id="search-bar">
            <Form id="searchForm" type="input" inline>
              <Form.Control
                onChange={this.handleFieldChange}
                placeholder="Search for recipes"
              />
            </Form>
          </div>
        </section>
        <section id="results-area">
          {/* map through results from api search and return single recipe cards */}
          {this.state.mealRecipes.map(singleRecipe => (
            <RecipeCard
              key={singleRecipe.id}
              recipeProp={singleRecipe}
              {...this.props}
            />
          ))}
        </section>
      </>
    );
  }
}

export default RecipeSearch;
