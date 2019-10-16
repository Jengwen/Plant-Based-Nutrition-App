import { Route, Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Auth0Client from "./auth/Auth";
import Callback from "./auth/Callback";
import UserAccount from "./users/UserAccount";
import Calculator from "./reports/Calculator";


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
            // if (Auth0Client.isAuthenticated()) {
              return <UserAccount {...props}  />;
            // } else {
            //   Auth0Client.signIn();
            //   return null;
            }
          }
          />
          <Route
          exact
          path="/reports"
          render={props => {
            // if (Auth0Client.isAuthenticated()) {
              return <Calculator {...props}  />;
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
