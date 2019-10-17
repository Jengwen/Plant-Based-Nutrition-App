import React, { Component } from "react";
import RceipeMgr from "../../modules/RecipeMgr";

class RecipeForm extends Component {

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
  updateExistingRecipe = evt => {
    // prevent page load again
    evt.preventDefault();
    // set loading status
    this.setState({ loadingStatus: true });
    //   build a edited object
    const editedRecipe = {
      id: this.state.recipe.id,
      name: this.state.name,
      url: this.state.url,
      nutrientId: Number(this.state.nutrientId)
    };
    // update JSON with API put and redirect to user account page
    RecipeMgr.update(editedRecipe).then(() =>
      this.props.history.push(`/recipes`)
    );
  };

}
export default RecipeForm