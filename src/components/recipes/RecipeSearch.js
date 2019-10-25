import React, { Component } from "react";
import APIMgr from "../../modules/APIMgr";
import UserMgr from "../../modules/UserMgr";
import SearchRecipeCard from "./SearchRecipeCard";
import { Form, Button } from "react-bootstrap";
import "./Recipe.css";

class RecipeSearch extends Component {
  state = {
    searchValue: "",
    label: "",
    url: "",
    userId: "",
    recipes: [],
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange)}

   handleSearch = evt => {
    evt.preventDefault();
    this.setState({loadingStatus: true})
    const search = this.state.searchValue

    APIMgr.getRecipebyString(search).then(recipes => {
        console.log(recipes.hits)
         this.setState({
           recipes: recipes.hits,
           loadingStatus: false
                });
              })}


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
            <Form id="searchForm">
              <Form.Control
                type="text"
                id="searchValue"
                 onClick= {this.handleFieldChange}
                size="lg"
                placeholder="Search for recipes by nutrient, meal, or ingredient"
              />
              <Button id="search" variant="light"
              disabled= {this.state.loadingStatus}
              onClick= {this.handleSearch}
              >Search</Button>
            </Form>
          </div>
        </section>
        <section id="results-area">
          {/* map through results from api search and return single recipe cards */}
          {this.state.recipes.map((singleRecipe, i )  => (
            <SearchRecipeCard
              key={i}
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
