import React, { Component } from "react";
import UserMgr from "../../modules/UserMgr";
import "./User.css";
import { Form, Button } from "react-bootstrap";

class UserAccount extends Component {
  state = {
    user: {
      name: "",
      email: "",
      weight: "",
      height: "",
      female: true,
      age: "",
      activityLevel: "",
      loadingStatus: true
    }
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
      female: this.state.female,
      age: Number(this.state.age),
      height: Number(this.state.height),
      weight: Number(this.state.weight),
      activityLevelId: this.state.activityLevel
    };
    // update JSON with API put and redirect to user account page
    UserMgr.update(editedUser).then(() => this.props.history.push(`/users/${editedUser.id}`));
  };
  /* call session storage user and render user card */

  componentDidMount() {
    UserMgr.getOne().then(user => {
      console.log(user);
      this.setState({
        user: user
      });
      console.log(user.name);
    });
  }

  render() {
    return (
      <>
        {/* return form to edit personal input items to recalculate report */}
        <section id="user-account">
          {/* render form to view and edit user account */}
          <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
            value= {this.state.user.name}
            onChange={this.handleFieldChange}
             />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text"
            value= {this.state.user.email}
             onChange={this.handleFieldChange} />
          </Form.Group>
          <Form.Group controlId="height">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              value= {this.state.user.height}
              onChange={this.handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              value={this.state.user.weight}
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              value={this.state.user.age}
            />
          </Form.Group>

        </Form>
          {/* button to save edited information in the json */}
          <Button
            variant="light"
            type="submit"
            onClick={this.updateExistingUser}
          >
            Save Edit
          </Button>

          {/* button to see personalized report upon click */}
          <Button id="report-btn" variant="light" type="submit">
            See Report
          </Button>
        </section>
      </>
    );
  }
}
export default UserAccount;
