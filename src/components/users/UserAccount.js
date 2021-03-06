import React, { Component } from "react";
import UserMgr from "../../modules/UserMgr";
import "./User.css";
import { Form, Button } from "react-bootstrap";
import ActivityMgr from "../../modules/ActivityMgr";

class UserAccount extends Component {
  state = {
    name: "",
    email: "",
    weight: "",
    height: "",
    gender: "",
    age: "",
    activitylevelId: "",
    activitylevels: [],
    loadingStatus: true,
    user: {}
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingUser = evt => {
    // prevent page load again
    evt.preventDefault();
    // set loading status
    this.setState({ loadingStatus: true });
    //   build a edited object
    const editedUser = {
      aud: this.state.user.aud,
      id: this.state.user.id,
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      age: Number(this.state.age),
      height: Number(this.state.height),
      weight: Number(this.state.weight),
      activitylevelId: Number(this.state.activitylevelId)
    };
    // update JSON with API put and redirect to user account page
    UserMgr.update(editedUser).then(() =>
      this.props.history.push(`/reports`)
    );
  };
  /* call session storage user and render user card */

  componentDidMount() {
    UserMgr.getOne().then(user => {
      console.log(user);
      this.setState({
        name: user.name,
        email: user.email,
        weight: user.weight,
        height: user.height,
        gender: user.gender,
        age: user.age,
        activitylevelId: user.activitylevelId,
        user: user
      });
      console.log(user.name);
    });
    // get all of the activity levels in an array to map for their id
    ActivityMgr.getAll().then(levels =>{
      console.log(levels);
      this.setState({
        activitylevels: levels
      })
    });
  }

  render() {
    return (
      <>
        {/* return form to edit personal input items to recalculate report */}
        <section id="user-account">
          <h3 id= "user-dashboard-header">Update Your Info to Calculate Your Nutrition Needs</h3>
          {/* render form to view and edit user account input values for report calculations*/}
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={this.state.name}
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="height">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="text"
                value={this.state.height}
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleFieldChange}
                value={this.state.weight}
              />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                onChange={this.handleFieldChange}
                value={this.state.age}
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label id="select-label">Gender</Form.Label>
              <select
                id="gender"
                value={this.state.gender}
                onChange={this.handleFieldChange}
              >
                <option >male</option>
                <option >female</option>
              </select>
            </Form.Group>
            <Form.Group controlId="activitylevelId">
              <Form.Label  id="select-label">Activity Level</Form.Label>
              <select
                id="activitylevelId"
                value={this.state.activitylevelId}
                onChange={this.handleFieldChange}
              >
                {this.state.activitylevels.map(levels => (
                  <option key={levels.id} value={levels.id}>
                    {levels.name}
                  </option>
                ))}
              </select>
            </Form.Group>
          </Form>
          {/* button to save edited information in the json and  redirect to the calculator and then user's report */}
          <Button
            variant="light"
            type="submit"
            size= "lg"
            onClick={this.updateExistingUser}
          >
            See Report
          </Button>
       </section>
      </>
    );
  }
}
export default UserAccount;
