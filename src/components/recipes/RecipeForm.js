import React, { Component } from "react";
import RecipeMgr from "../../modules/RecipeMgr";
import { Form, Button } from "react-bootstrap";
import NutrientMgr from "../../modules/NutrientMgr";
import Select from "react-select";

class RecipeForm extends Component {
  state = {
    title: "",
    url: "",
    userId: "",
    nutrients: [],
    selectValues: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  _onChange(value) {
    //console.log(value) - just to see what we recive from <Select />
    this.setState({selectValues: value});
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
        // userId: this.props.userProp.id
      };
      // Create the recipe and redirect user to recipe list
      RecipeMgr.post(recipe).then(postedRecipe => {
        // for loop to loop through nutrients array and create and post
        // a recipe-nutrient object and post to join table in json
        for (var i = 0; i < this.state.selectValues.length; i++) {
          const recipeNutrient = {
            recipeId: postedRecipe.id,
            nutrientId: this.state.selectValues[i].id
          };
          // create the recipe_nutrient and redirect to recipes
          RecipeMgr.postNutrients(recipeNutrient)
          .then(() =>
            this.props.history.push("/recipes")
          );
        }
      });
    }
  };
  componentDidMount() {
    console.log("recipe form, component did mount");
    NutrientMgr.getAllNutrients().then(nutrients => {
      this.setState({
        nutrients: nutrients
      });
      console.log(nutrients);
    });
  }

  render() {
    // create selection dropdown form for nutrients
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
              {/* multi select nutrients to tag to a recipe */}
            </Form.Group>
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
