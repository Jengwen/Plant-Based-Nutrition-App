import React, { Component } from "react";
import "./Report.css"
class UserReport extends Component {
// return calculated results from input form and render report with graph

render (){
return (
    <>
<section id="report-results">
    <h2 id="report-heading">Personalized Nutrition Report</h2>
    <div id= "calories">
<h3 id="calorie-header">Calories:</h3>

    </div>
    <div id="macro">
    <h3 id="macro-header">Macronutrients:</h3>
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