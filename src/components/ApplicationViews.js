import { Route, Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Auth0Client from "./auth/Auth";
import Callback from "./auth/Callback";
import UserCard from "./users/UserCard";


class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
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
          path="/users"
          render={props => {
            // if (Auth0Client.isAuthenticated()) {
              return <UserCard {...props}  />;
            // } else {
            //   Auth0Client.signIn();
            //   return null;
            }
          }
        />
      </React.Fragment>
    );
  }
}
export default ApplicationViews;
