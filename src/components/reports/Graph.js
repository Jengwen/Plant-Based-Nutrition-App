import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class Graph extends Component {
  // set props for graph data
  constructor(props) {
    super(props);
    this.state = {
      graphData: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: []
          }
        ]
      }
    };
  }

  componentDidMount() {
    console.log("Graph: ComponentDidMount");
// set state of data, labels
    this.setState({
      graphData: {
        labels: [],
        datasets: [
          {
            label: "Macronutrients",
            data: []
          }
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.6)"]
      }
    });
  }

  render() {
    // render graph with data from calculations in user account
    const graphData = {
      labels: ["Protein", "Carbohydrates", "Fat"],
      datasets: [
        {
          label: "Macronutrients",
          data: [
            this.props.proteinProp,
            this.props.carbProp,
            this.props.fatProp
          ]
        }
      ],
      backgroundColor: ["rgba(255, 99, 132, 0.6)"]
    };
    return (
      <div>
        <Pie
          data={graphData}
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
