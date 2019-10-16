import React, { Component } from "react";
import CalculationMethods from "../reports/CalculationMethods";
import UserMgr from "../../modules/UserMgr";
import UserReport from "../reports/ReportCard";
class Calculator extends Component {
  // make calculations occur for calories here:
  componentDidMount() {
    // bring back session storage user and their details from the json
    UserMgr.getOneActive().then(user => {
      console.log(user);
      const calories = CalculationMethods.getCalories(
        user.gender,
        user.age,
        user.weight,
        user.height,
        user.activitylevel.fvalue,
        user.activitylevel.mvalue
      ).then(
        this.setState({
          calories: calories
        })
      );
    });
  }

  // render report calculations of calories and macronutrients
  render() {
    return (
      // return user report component so user will see the report of calories and
      // macronutrients
      <>
        <UserReport />
      </>
    );
  }
}

export default Calculator;
