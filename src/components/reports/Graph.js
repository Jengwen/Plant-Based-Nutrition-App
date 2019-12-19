import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class Graph extends Component {
  // build graph component
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
    // render graph with data for the graph
    const graphData = {
      labels: ["Protein", "Carbohydrates", "Fat"],
      datasets: [
        {
          label: "Macronutrients",
          // return props from  macronutrient calculations
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
      // return the graph
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
