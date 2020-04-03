import { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import React from "react";
import Chart from "./Chart";
import DynamicChart from "./Chart";

interface Props {}

interface State {}
export default class Main extends Component<Props, State> {
  render(): JSX.Element {
    return (
      <Paper>
        <DynamicChart
          dataLabels={["April", "May", "June", "July"]}
          dataLabel="Average users online"
          xAxisLabel="test"
          yAxisLabel="test"
          data={Array(10)
            .fill(0)
            .map((e, i) => Math.floor(Math.random() * 100))}
          canvasId={"id2"}
        ></DynamicChart>
      </Paper>
    );
  }
}
