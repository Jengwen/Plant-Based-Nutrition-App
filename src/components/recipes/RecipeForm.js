import React, { Component } from "react";
import RecipeMgr from "../../modules/RecipeMgr";
import { Form, Button } from "react-bootstrap";
import NutrientMgr from "../../modules/NutrientMgr";
import UserMgr from "../../modules/UserMgr";
import MealTypeMgr from "../../modules/MealTypeMgr";
import Select from "react-select";

class RecipeForm extends Component {
  state = {
    title: "",
    url: "",
    userId: "",
    nutrients: [],
    mealTypes: [],
    selectValues: [],
    selectValue:[]
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  _onChange(value) {
    //console.log(value) - just to see what we recive from <Select />
    this.setState({ selectValues: value });
  };
  _onChanges(value) {
    console.log(value)
    this.setState({ selectValue: value });
  }
  // method to construct new recipe
  constructNewRecipe = evt => {
    evt.preventDefault();
    if (this.state.title === "" || this.state.url === "") {
      window.alert("Please input an title and url link");
    } else {
      this.setState({ loadingStatus: true });
      const recipe = {
        title: this.state.title,
        url: this.state.url,
        mealTypeId: this.state.selectValue.id,
        userId: this.state.userId,
        archived: false
      };

      //post the recipe and bring back recipe Id
      RecipeMgr.post(recipe).then(postedRecipe => {
        const recipeId = postedRecipe.id;
        // take selected nutrients array to create and post recipe-nutrient to jon table
        const selectNutrientArray = this.state.selectValues;
        // create array of recipe single nutrient objects
        let newArray = selectNutrientArray.map(singleNutrient => {
          // build receipNutrient for specific recipe created
          const recipeNutrient = {
            recipeId: recipeId,
            nutrientId: singleNutrient.id
          };
          // call fetch to post each recipe-nutrient object to json
          RecipeMgr.postNutrients(recipeNutrient);
        });

        // take the recipe_nutrient objects and redirect to recipes
        Promise.all(newArray).then(() => this.props.history.push("/recipes"));
      });
    }
  };
  componentDidMount() {
    // fetch all possible nutrients to select while creating a recipe and put in array
    NutrientMgr.getAllNutrients().then(nutrients => {
      this.setState({
        nutrients: nutrients
      });
    });
    // fetch the logged in user's id to attach to saved recipes
    UserMgr.getOne().then(singleUser => {
      this.setState({
        userId: singleUser.id
      });
    });
    // fetch all of the possible meal types
    MealTypeMgr.getAllMealTypes().then(mealTypes => {
      console.log(mealTypes);
      this.setState({
        mealTypes: mealTypes
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
    // return form to create a new recipe
    return (
      <>
        <section id="recipe-input">
          <h3 id="recipe-input-header">Link and Save Your Favorite Recipes</h3>
          {/* render form to create recipe input */}
          <Form id="recipe-form">
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={this.handleFieldChange} />
            </Form.Group>
            <Form.Group controlId="url">
              <Form.Label>Recipe Url</Form.Label>
              <Form.Control onChange={this.handleFieldChange} />
            </Form.Group>
            <Form.Label>Meal Type</Form.Label>
            {/* single select box for meal type */}
            {mealTypeSelect()}
            {/* multi select nutrients to tag to a recipe */}
            <Form.Label>Nutrients</Form.Label>
            {nutrientSelect()}
          </Form>
          {/* button to save recipe to the json and  redirect to recipe list*/}
          <Button
            id="save-recipe-btn"
            variant="light"
            type="submit"
            size="lg"
            onClick={this.constructNewRecipe}
          >
            Save Recipe
          </Button>
        </section>
      </>
    );
  }
}
export default RecipeForm;
