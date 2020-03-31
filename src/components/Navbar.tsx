import React, { Component } from "react";
import { Toolbar, AppBar, IconButton, Typography, Button, makeStyles, withStyles } from "@material-ui/core";
import { ControlCameraSharp } from "@material-ui/icons/";

export default class Navbar extends Component {


  render(): JSX.Element {
    return (
      
      <AppBar color={"transparent"} position="sticky" elevation={10}>
        <Toolbar >
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <ControlCameraSharp />
          </IconButton>
          <Typography style={{ marginRight: "3%" }} variant="h6" >
            Control panel
          </Typography>
          <Button color="inherit">Main</Button>
            <Button  color="inherit">Graphs</Button>
          <Button color="inherit">Registered users</Button>
          <Button color="inherit">Settings</Button>
          <Button style={{
            height: "100%", position: "absolute", right: "5vh",
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)", color: "white"
          }} color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
