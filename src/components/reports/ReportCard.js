import React, { Component } from "react";
import "./Report.css"
class UserReport extends Component {
// how to get calculation results?

// return calculated results from input form and render report with graph
render (){
return (
    <>
<section id="report-results">
    <h2 id="report-heading">Personalized Nutrition Report</h2>
    <div id= "calories">
<h3 id="calorie-header">Calories:</h3>
{/* <p>{calories}</p> */}
    </div>
    <div id="macro">
    <h3 id="macro-header">Macronutrients:</h3>
    <div>
        <h4 id= "protein-heading">Protein:</h4>
{/* <p>{protein}</p> */}
<h4 id= "protein-heading">Fats:</h4>
{/* <p>{fat}</p> */}
<h4 id= "protein-heading">Carbohydrates:</h4>
{/* <p>{carbs}</p> */}
    </div>
    </div>
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