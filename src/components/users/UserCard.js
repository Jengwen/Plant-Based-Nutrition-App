import React, { Component } from "react";
import { Form} from "react-bootstrap";

class UserCard extends Component {
  // update state upon field change as user types
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

// render the user information for the logged in user and edit form
  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
            value= {this.props.userProp.name}
            onChange={this.handleFieldChange}
             />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text"
            value= {this.props.userProp.email}
             onChange={this.handleFieldChange} />
          </Form.Group>
          <Form.Group controlId="height">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              value= {this.props.userProp.height}
              onChange={this.handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              value={this.props.userProp.weight}
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              value={this.props.userProp.age}
            />
          </Form.Group>

        </Form>
      </>
    );
  }
}
export default UserCard;
