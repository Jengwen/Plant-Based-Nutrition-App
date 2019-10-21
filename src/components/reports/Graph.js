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
            data: [this.props.proteinProp, this.props.carbProp, this.props.fatProp],
            backgroundColor: [

            ]
          }
        ]
      }
    };
  }

  // componentDidMount() {
  //   console.log("Graph: ComponentDidMount");
  //   // set labels in labelArray
  //   const labelArray = ["Protein", "Carbohydrates", "Fat"]
  //   // give pie graph data from props from calculations
  //   // const dataArray = [this.props.proteinProp,100,200]

  //     this.setState({
  //       graphData: {
  //         labels: labelArray,
  //         datasets: [
  //           {
  //             label: "Macronutrients",
  //             data: [this.props.proteinProp, this.props.carbProp, this.props.fatProp]
  //           }
  //         ],
  //         backgroundColor: ["rgba(255, 99, 132, 0.6)"]
  //       }
  //     });
  //   };

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
