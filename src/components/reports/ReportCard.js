import React, { Component } from "react";
import "./Report.css"
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
<h4 id= "protein-heading">Fats:</h4>
 <p>{this.props.fatProp} grams</p>
<h4 id= "protein-heading">Carbohydrates:</h4>
<p>{this.props.carbProp} grams</p>
    </div>
    </div>
    </section>
        <div id="pie-chart">

    </div>
    <div id="micro">

    </div>
</section>
    </>
)
}
}
export default UserReport