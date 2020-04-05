import { Component } from "react";
import { Paper, Typography, Grid, GridListTile, GridList, Button } from "@material-ui/core";
import React from "react";

import StaticChart from "./StaticChart";
import DynamicChart from "./DynamicChart";
import gServerLoad from "../globals/gServerLoad";
import gCurrentUsersOnline from "../globals/gCurrentUsersOnline";

const gridTileStyle: React.CSSProperties = { height: "100%", minWidth: "350px" };
const buttonStyle: React.CSSProperties = { margin: "1vh", width: "170px" };
interface Props {}

interface State {
  currentUsersOnline: number;
}
export default class Main extends Component<Props, State> {
  state: State = {
    currentUsersOnline: gCurrentUsersOnline.getValue(),
  };
  componentDidMount() {
    gCurrentUsersOnline.subscribe({
      next: (users) => {
        this.setState({ currentUsersOnline: users });
      },
    });
  }
  runningSince = new Date().toLocaleString();
  render(): JSX.Element {
    return (
      <Paper elevation={5}>
        <GridList style={{ justifyContent: "space-around", display: "flex", overflow: "hidden", flexWrap: "wrap", width: "100%" }} cols={2}>
          <GridListTile style={gridTileStyle}>
            <Typography>Current users online: {this.state.currentUsersOnline}</Typography>
            <Typography>Running since: {this.runningSince}</Typography>
            <Typography>Server time: {new Date().toLocaleTimeString()}</Typography>
            <div style={{ marginTop: "10%", marginLeft: "20%" }}>
              <Button
                onClick={() => {
                  alert("Server started");
                }}
                style={buttonStyle}
                variant={"outlined"}
                color={"primary"}
              >
                Start server
              </Button>
              <Button
                onClick={() => {
                  alert("Server restarted");
                }}
                style={buttonStyle}
                variant={"outlined"}
                color={"default"}
              >
                Restart server
              </Button>
              <Button
                onClick={() => {
                  alert("Server stopped");
                }}
                style={buttonStyle}
                variant={"outlined"}
                color={"secondary"}
              >
                Stop server
              </Button>
            </div>
          </GridListTile>

          <GridListTile style={gridTileStyle}>
            <Typography>Average server response time</Typography>

            <DynamicChart
              newValuesStream={gServerLoad}
              canvasId={"performance canvas2"}
              xAxisLabel="response time server"
              yAxisLabel="milliseconds"
              dataLabel={"Average server response time"}
              dataLabels={[]}
            ></DynamicChart>
          </GridListTile>
        </GridList>
      </Paper>
    );
  }
}
