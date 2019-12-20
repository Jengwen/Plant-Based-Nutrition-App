import React, { Component } from "react";
import "./Report.css";
import { Link } from "react-router-dom";
class UserReport extends Component {
  // return calculated results from input form and render report with graph
  render() {
    return (
      <>
        <section id="report">
          <h2 id="report-heading">Personalized Nutrition Report</h2>
          <section id="report-results">
            <div id="calories">
              <h3 id="calorie-header">Calories:</h3>
              <p id="calorie-result">{this.props.calorieProp}</p>
            </div>
            <div id="macro">
              <h3 id="macro-header">Macronutrients:</h3>
              <div id="protein">
                <h4 id="protein-heading">Protein:</h4>
                <p id="protein-result">{this.props.proteinProp} grams</p>
                <Link to={`/recipe_nutrients/1`}>
                  <button id="protein-result">See Recipes</button>
                </Link>
              </div>
              <div id="fats">
              <h4 id="protein-heading">Fats:</h4>
                <p id="fat-result">{this.props.fatProp} grams</p>
                <Link to={`/recipe_nutrients/2`}>
                  <button id="fat-result">See Recipes</button>
                </Link>
              </div>
              <div id="carbs">
              <h4 id="protein-heading">Carbohydrates:</h4>
                <p id="carb-result">{this.props.carbProp} grams</p>
                <Link to={`/recipe_nutrients/3`}>
                  <button id="carb-result">See Recipes</button>
                </Link>
              </div>
            </div>
          </section>
         
          <div id="micro">
            <h3 id="micro-header">Micronutrients:</h3>
            <div id="micro-details">
              <div id="calcium">
                <p id="micro-results">Calcium: {this.props.calciumProp} grams</p>
                <Link to={`/recipe_nutrients/6`}>
                  <button id="micro-results">See Recipes</button>
                </Link>
              </div>
              <div id="fiber">
                <p id="micro-results">Fiber: {this.props.fiberProp} grams</p>
                <Link to={`/recipe_nutrients/4`}>
                  <button id="micro-results">See Recipes</button>
                </Link>
              </div>
              <div id="fiber">
                <p id="micro-results">Iron: {this.props.ironProp} grams</p>
                <Link to={`/recipe_nutrients/5`}>
                  <button id="micro-results">See Recipes</button>
                </Link>
              </div>
              <div id="potassium">
                <p id="micro-results">Potassium: 4700 grams</p>
                <Link to={`/recipe_nutrients/7`}>
                  <button id="micro-results">See Recipes</button>
                </Link>
              </div>
              <div id="vitD">
              <p id="micro-results">Vitamin D: 600 grams</p>
              <Link to={`/recipe_nutrients/8`}>
                <button id="micro-results">See Recipes</button>
              </Link>
              </div>
              <div id="other-nutrients">
              <p>Vitamin C: {this.props.vitaminCProp}</p>
              <p>Niacin: {this.props.niacinProp}</p>
              <p>B6: {this.props.vitaminB6Prop}</p>
              <p>B12: 2.4</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default UserReport;
