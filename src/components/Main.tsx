import { Component } from "react";
import { Paper, Typography, Grid, GridListTile, GridList, Button } from "@material-ui/core";
import React from "react";

import DynamicChart from "./DynamicChart";
import gServerLoad from "../globals/gServerLoad";
import gCurrentUsersOnline from "../globals/gCurrentUsersOnline";
import PAPER_PADDING from "../contstants/PAPER_PADDING";

const gridTileStyle: React.CSSProperties = { height: "100%", minWidth: "500px" };
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
      <Paper elevation={10} style={{ padding: PAPER_PADDING }}>
        <GridList cols={2}>
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
            <DynamicChart
              newValuesStream={gServerLoad}
              canvasId={"performance canvas2"}
              xAxisLabel=""
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
