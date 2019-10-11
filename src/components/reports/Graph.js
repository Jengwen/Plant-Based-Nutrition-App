import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import UserMgr from "../../modules/UserMgr";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: {
        labels: [],
        datasets: [
          {
            label: "Protein",
            data: [],
            backgroundColor: [

            ]
          }
        ]
      }
    };
  }

  componentDidMount() {
    console.log("Graph: ComponentDidMount");
    //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
    UserMgr.getOne().then(user => {
      // map over events and create new object of event names and gross profits

      this.setState({
        graphData: {
          labels: labelArray,
          datasets: [
            {
              label: "Profits",
              data: profitArray
            }
          ],
          backgroundColor: ["rgba(255, 99, 132, 0.6)"]
        }
      });
    });
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
