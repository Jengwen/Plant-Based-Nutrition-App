import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class UserCard extends Component {
  // return calculated results from input form and render report with graph

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={this.handleFieldChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={this.handleFieldChange} />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              placeholder="Enter height "
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              placeholder="Enter weight"
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleFieldChange}
              placeholder="Enter age"
            />
          </Form.Group>
          {/* button to save edited information in the json */}
          <Button
            variant="light"
            type="submit"
            onClick={this.updateExistingUser}
          >
            Save Edit
          </Button>
        </Form>
        {/* button to see personalized report upon click */}
        <Button id="report-btn" variant="light" type="submit">
          See Report
        </Button>
      </>
    );
  }
}
export default UserCard;
