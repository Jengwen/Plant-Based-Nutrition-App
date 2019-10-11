import React, { Component } from "react";
import UserMgr from "../../modules/UserMgr";
import {Form, Button} from "react-bootstrap";
import "./User.css";

class UserAccount extends Component{

    state = {
        name: "",
        email: "",
        weight: "",
        height: "",
        female: true,
        age: "",
activityLevel: "",
        loadingStatus: true,
      };

      handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }

      updateExistingUser = evt => {
        // prevent page load again
      evt.preventDefault()
    // set loading status
          this.setState({ loadingStatus: true });
    //   build a edited object
      const editedUser = {
         aud: this.props.match.params.aud,
        id: this.props.match.params.id,
        name: this.state.name,
        email: this.state.email,
        female: this.state.female,
        age: Number(this.state.age),
       height: Number(this.state.height),
        weight: Number(this.state.weight),
activityLevel: this.state.activityLevel
      };
 // update JSON with API put and redirect to user account page
 UserMgr.update(editedUser)
 .then(() => this.props.history.push("/users"))
}

componentDidMount() {
 UserMgr.getOne(this.props.match.params.id)
 .then(user => {
     this.setState({
        name: user.name,
        email: user.email,
        female: user.female,
        age: user.age,
       height: user.height,
        weight: user.weight,
activityLevel: user.activityLevel
    });
});
}

    render(){
        return(
        <>
        {/* return form to edit personal input items to recalculate report */}
<section id="user-account">
<Form>
<Form.Group controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Height</Form.Label>
    <Form.Control type="text" placeholder="Enter height " />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Weight</Form.Label>
    <Form.Control type="text" placeholder="Enter weight" />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
{/* button to save edited information in the json */}
  <Button variant="light" type="submit">
   Save Edit
  </Button>
</Form>
{/* button to see personalized report upon click */}
 <Button id= "report-btn" variant="light" type="submit">
   See Report
  </Button>
  </section>
        </>)
    }

}
export default UserAccount