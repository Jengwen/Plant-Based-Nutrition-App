import React, { Component } from "react";
import "./Report.css"
import { Link } from "react-router-dom";
class UserReport extends Component {
// return calculated results from input form and render report with graph
render (){
return (
    <>
<section id="report">
    <h2 id="report-heading">Personalized Nutrition Report</h2>
    <section id="report-results">
    <div id= "calories">
<h3 id="calorie-header">Calories:</h3>
<p>{this.props.calorieProp}</p>
    </div>
    <div id="macro">
    <h3 id="macro-header">Macronutrients:</h3>
    <div>
        <h4 id= "protein-heading">Protein:</h4>
 <p>{this.props.proteinProp} grams</p>
 <Link to={`/recipe_nutrients/1`}>
            <button>See Recipes</button>
          </Link>
<h4 id= "protein-heading">Fats:</h4>
 <p>{this.props.fatProp} grams</p>
<h4 id= "protein-heading">Carbohydrates:</h4>
<p>{this.props.carbProp} grams</p>
    </div>
    </div>
    </section>
        {/* <div id="pie-chart">
    </div> */}
    <div id="micro">
    <h3 id="micro-header">Micronutrients:</h3>
<div id="micro-details">
<p>Calcium: {this.props.calciumProp} grams</p>
<p>Fiber: {this.props.fiberProp} grams</p>
<p>Iron: {this.props.ironProp} grams</p>
<p>Potassium: 4700 grams</p>
<p>Vitamin D: 600 grams</p>
<p>Vitamin C: {this.props.vitaminCProp}</p>
<p>Niacin: {this.props.niacinProp}</p>
<p>B6: {this.props.vitaminB6Prop}</p>
<p>B12: 2.4</p>
</div>
    </div>
</section>
    </>
)
}
}
export default UserReport