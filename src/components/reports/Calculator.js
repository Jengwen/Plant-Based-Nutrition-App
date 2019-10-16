import React, { Component } from "react";
import CalculationMethods from "../reports/CalculationMethods";
import UserMgr from "../../modules/UserMgr";
import UserReport from "../reports/ReportCard";
class Calculator extends Component {
  state = {
    calories: "",
    protein: "",
    fat: "",
    carbohydrates: ""
  };
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
      );
      this.setState({
        calories: calories.toFixed(0)
      });
      const protein = CalculationMethods.getProtein(calories);
      this.setState({
        protein: protein.toFixed(0)
      });
      const fat = CalculationMethods.getFat(calories);
      this.setState({
       fat: fat.toFixed(0)
      });
      const carbohydrates = CalculationMethods.getCarbs(calories);
      this.setState({
        carbohydrates: carbohydrates.toFixed(0)
      });
    });
  }

  // render report calculations of calories and macronutrients
  render() {
    return (
      // return user report component so user will see the report of calories and
      // macronutrients
      <>
        <UserReport calorieProp={this.state.calories}
        proteinProp ={this.state.protein}
        carbProp= {this.state.carbohydrates}
        fatProp= {this.state.fat}{...this.props}/>
      </>
    );
  }
}

export default Calculator;
