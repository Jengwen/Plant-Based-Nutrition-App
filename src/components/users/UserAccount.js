import React, { Component } from "react";
import UserMgr from "../../modules/UserMgr";
import "./User.css";
import UserCard from "../users/UserCard";
import {Button} from "react-bootstrap"

class UserAccount extends Component {
  state = {
    name: "",
    email: "",
    weight: "",
    height: "",
    female: true,
    age: "",
    activityLevel: "",
    loadingStatus: true
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
    UserMgr.update(editedUser).then(() => this.props.history.push("/users"));
  };



  render() {
    return (
      <>
        {/* return form to edit personal input items to recalculate report */}
        <section id="user-account">
         <UserCard
                />
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
