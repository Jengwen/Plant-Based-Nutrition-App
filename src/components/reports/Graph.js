import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class Graph extends Component {

   constructor(props) {
    super(props);
    this.state = {
      graphData: {
        labels: [],
        datasets: [
          {
            label: "Protein",
            data: [this.props.proteinProp],
            backgroundColor: [

            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <Pie
          data={this.state.graphData}
          options={{
            title: {
              display: true,
              text: "Macronutrients",
              fontSize: 20
            }
          }}
        />
      </div>
    );
  }
}
export default Graph;
