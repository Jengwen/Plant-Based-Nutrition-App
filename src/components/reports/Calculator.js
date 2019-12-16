import React, { Component } from "react";
import CalculationMethods from "../reports/CalculationMethods";
import UserMgr from "../../modules/UserMgr";
import UserReport from "../reports/ReportCard";
import Graph from "./Graph";
class Calculator extends Component {
  state = {
    calories: "",
    protein: "",
    fat: "",
    carbohydrates: "",
    calcium: "",
    iron: "",
    niacin: "",
    vitaminC: "",
    vitaminB6: "",
    fiber: ""
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
      const calcium = CalculationMethods.getCalcium(user.gender,user.age);
      this.setState({
        calcium: calcium
    });
    const iron = CalculationMethods.getIron(user.gender,user.age);
    this.setState({
      iron: iron
    });
    const niacin = CalculationMethods.getNiacin(user.gender);
    this.setState({
      niacin: niacin
    });
    const vitaminC = CalculationMethods.getVitaminC(user.gender);
    this.setState({
      vitaminC: vitaminC
    });
    const B6 = CalculationMethods.getB6(user.gender,user.age);
    this.setState({
      B6: B6
    });
    const fiber = CalculationMethods.getFiber(user.gender,user.age);
    this.setState({
      fiber: fiber
    });
  })}
  // render report calculations of calories and macronutrients
  render() {
    return (
      // return user report component so user will see the report of calories and
      // macronutrients
      <>
        <UserReport calorieProp={this.state.calories}
        proteinProp ={this.state.protein}
        carbProp= {this.state.carbohydrates}
        fatProp= {this.state.fat}{...this.props}
        calciumProp = {this.state.calcium}{...this.props}
        ironProp = {this.state.iron}{...this.props}
        niacinProp= {this.state.niacin}{...this.props}
        vitaminCProp= {this.state.vitaminC}{...this.props}
        vitaminB6Prop= {this.state.B6}{...this.props}
        fiberProp= {this.state.fiber}{...this.props}
        />
        <Graph
         proteinProp ={this.state.protein}
        carbProp= {this.state.carbohydrates}
        fatProp= {this.state.fat}{...this.props}

              /></>
    );
  }
}

export default Calculator;
