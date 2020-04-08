import React, { Component } from "react";
import { Paper, Typography, Color, createMuiTheme, GridList, GridListTile, Button } from "@material-ui/core";
import { SketchPicker } from "react-color";
import gCurrentTheme from "../globals/gCurrentTheme";
import PAPER_PADDING from "../contstants/PAPER_PADDING";
type Props = {};

type State = {
  paperBackgroundColor: string;
  bodyBackgroundColor: string;
  primary: string;
  secondary: string;
  fontColor: string;
};

const gridTileStyle: React.CSSProperties = { height: "100%", minWidth: "350px", paddingLeft: "5%" };

export default class Settings extends Component<Props, State> {
  state: State = {
    paperBackgroundColor: gCurrentTheme.getValue().palette.background.paper,
    primary: gCurrentTheme.getValue().palette.primary.main,
    secondary: gCurrentTheme.getValue().palette.secondary.main,
    bodyBackgroundColor: "white",
    fontColor: "white",
  };

  render(): JSX.Element {
    return (
      <Paper elevation={10} style={{ padding: PAPER_PADDING }}>
        <Typography style={{ fontSize: 20 }} color={"secondary"} variant={"caption"}>
          Changing the color of the control panel
        </Typography>
        <GridList style={{ justifyContent: "space-around", display: "flex", overflow: "hidden", flexWrap: "wrap", width: "100%", marginTop: "1vh" }} cols={3}>
          <GridListTile style={gridTileStyle}>
            <Typography>Change paper background color</Typography>
            <SketchPicker
              color={this.state.paperBackgroundColor}
              onChange={(color) => {
                this.setState({ paperBackgroundColor: color.hex });
                const theme = { ...gCurrentTheme.getValue() };
                theme.palette.background.paper = color.hex;
                gCurrentTheme.next(theme);
              }}
            ></SketchPicker>
          </GridListTile>
          <GridListTile style={gridTileStyle}>
            <Typography>Change body background color</Typography>
            <SketchPicker
              onChange={(color) => {
                this.setState({ bodyBackgroundColor: color.hex });
                document.body.style.background = color.hex;
              }}
              color={this.state.bodyBackgroundColor}
            ></SketchPicker>
          </GridListTile>
          <GridListTile style={gridTileStyle}>
            <Typography>Change primary color</Typography>
            <SketchPicker
              onChange={(color) => {
                this.setState({ primary: color.hex });
                const theme = { ...gCurrentTheme.getValue() };
                theme.palette.primary.main = color.hex;
                gCurrentTheme.next(theme);
              }}
              color={this.state.primary}
            ></SketchPicker>
          </GridListTile>
          <GridListTile style={gridTileStyle}>
            <Typography>Change secondary color</Typography>
            <SketchPicker
              onChange={(color) => {
                this.setState({ secondary: color.hex });
                const theme = { ...gCurrentTheme.getValue() };
                theme.palette.secondary.main = color.hex;
                gCurrentTheme.next(theme);
              }}
              color={this.state.secondary}
            ></SketchPicker>
          </GridListTile>
          <GridListTile style={gridTileStyle}>
            <Typography>Change font color</Typography>
            <SketchPicker
              onChange={(color) => {
                this.setState({ fontColor: color.hex });
                const theme = { ...gCurrentTheme.getValue() };
                theme.palette.text.primary = color.hex;
                gCurrentTheme.next(theme);
              }}
              color={this.state.fontColor}
            ></SketchPicker>
          </GridListTile>
          <GridListTile style={gridTileStyle}>
            <Button
              style={{ marginTop: "30%" }}
              variant={"outlined"}
              onClick={() => {
                gCurrentTheme.next(createMuiTheme({ palette: { type: "dark" } }));
                this.setState({ bodyBackgroundColor: "black" });
                document.body.style.background = "grey";
              }}
            >
              Dark Theme
            </Button>
          </GridListTile>
        </GridList>
      </Paper>
    );
  }
}
