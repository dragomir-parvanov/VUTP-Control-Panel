import React, { Component } from "react";
import { Paper, Typography, GridList, GridListTile } from "@material-ui/core";
import StaticChart from "./StaticChart";
const gridTileStyle: React.CSSProperties = { height: "100%", minWidth: "350px" };
class Graphs extends Component {
  render() {
    return (
      <Paper>
        <Typography>DATA IS RANDOM GENERATED ON RUNTIME</Typography>
        <GridList style={{ justifyContent: "space-around", display: "flex", overflow: "hidden", flexWrap: "wrap", width: "100%" }} cols={2}>
          <GridListTile key={1} style={gridTileStyle}>
            <div style={{ width: "100%" }}>
              <StaticChart
                dataLabels={["April", "May", "June", "July"]}
                dataLabel="Average users online"
                xAxisLabel="Months"
                yAxisLabel="Users"
                data={Array(4)
                  .fill(0)
                  .map((e, i) => Math.floor(Math.random() * 100))}
                canvasId={"users"}
              ></StaticChart>
            </div>
          </GridListTile>
          <GridListTile key={2} style={gridTileStyle}>
            <div style={{ width: "100%" }}>
              <StaticChart
                dataLabels={["April", "May", "June", "July"]}
                dataLabel="Average profit in Leva"
                xAxisLabel="Months"
                yAxisLabel="Leva"
                data={Array(10)
                  .fill(0)
                  .map((e, i) => Math.floor(Math.random() * 10000))}
                canvasId={"average profit for the month"}
              ></StaticChart>
            </div>
          </GridListTile>
        </GridList>
      </Paper>
    );
  }
}

export default Graphs;
