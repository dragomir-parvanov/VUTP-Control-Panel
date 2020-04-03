import { Component } from "react";
import { Paper, Typography, Grid, GridListTile, GridList } from "@material-ui/core";
import React from "react";

import StaticChart from "./StaticChart";
import DynamicChart from "./DynamicChart";
import gServerLoad from "../globals/gServerLoad";

interface Props {}

interface State {}
export default class Main extends Component<Props, State> {
  render(): JSX.Element {
    return <div>
      <DynamicChart newValuesStream={gServerLoad} canvasId={"performance canvas"}  xAxisLabel="" yAxisLabel="Server load" dataLabel={"hello"} dataLabels={[]} >

      </DynamicChart>
    </div>;
  }
}
