import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import UserMgr from '../../modules/UserMgr'

class UserCard extends Component {

  componentDidMount() {
    UserMgr.getOne().then(user => {
      console.log(user);
      this.setState({
        name: user.name,
        email: user.email,
        female: user.female,
        age: user.age,
        height: user.height,
        weight: user.weight,
        activityLevel: user.activityLevel
      });
      console.log(user.name);
    });
  }

  // return calculated results from input form and render report with graph

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
            // value= {this.state.name}
            onChange={this.handleFieldChange}
             />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={this.handleFieldChange} />
          </Form.Group>
          <Form.Group controlId="height">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              placeholder="Enter weight"
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              placeholder="Enter age"
            />
          </Form.Group>
        </Form>
      </>
    );
  }
}
export default UserCard;
