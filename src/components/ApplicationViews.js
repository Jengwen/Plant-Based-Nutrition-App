import { Route, Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Auth0Client from "./auth/Auth";
import Callback from "./auth/Callback";
import UserAccount from "./users/UserAccount";
import Calculator from "./reports/Calculator";
import RecipeCard from "./recipes/RecipeCard";
import RecipeList from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import ResourceList from "./resources/ResourceList";
import RecipeNutrientList from "./recipes/RecipeListNutrient";
import RecipeSearch from "./recipes/RecipeSearch";
import MyRecipeList from "./recipes/MyRecipeList";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/home"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route exact path="/callback" component={Callback} />
        <Route
          exact
          path="/users/:id"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
              return <UserAccount {...props} />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        {/* route established to got to report */}
        <Route
          exact
          path="/reports"
          render={props => {
            if (Auth0Client.isAuthenticated()) {
              return <Calculator {...props} />;
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        {/* route to list of all recipes */}
        <Route
          exact
          path="/recipes"
          render={props => {
            return <RecipeList {...props} />;
          }}
        />
        <Route
          path="/recipes/:recipeId(\d+)"
          render={props => {
            // Pass the recipeId to the Recipe Card
            if (Auth0Client.isAuthenticated()) {
              return (
                <RecipeCard
                  {...props}
                  recipeId={parseInt(props.match.params.recipeId)}
                />
              );
            } else {
              Auth0Client.signIn();
              return null;
            }
          }}
        />
        <Route
          path="/recipes/new"
          render={props => {
              return <RecipeForm {...props} />;
            }
          }
        />
        <Route
          path="/recipes/search"
          render={props => {
            return <RecipeSearch {...props} />;
          }}
        />
        <Route
          path="/recipes/myRecipes"
          render={props => {
            return <MyRecipeList {...props} />;
          }}
        />
        <Route
          path="/recipe_nutrients/:nutrientId(\d+)"
          render={props => {
            return (
              <RecipeNutrientList
                {...props}
                nutrientId={parseInt(props.match.params.nutrientId)}
              />
            );
          }}
        />
        <Route
          exact
          path="/resources"
          render={props => {
            return <ResourceList {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
export default ApplicationViews;
