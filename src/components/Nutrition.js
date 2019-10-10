import React, { Component } from 'react'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import {withRouter} from 'react-router-dom';
import auth0Client from './auth/Auth'

class Nutrition extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
  }
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}
export default withRouter(Nutrition);