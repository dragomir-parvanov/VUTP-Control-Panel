import React, { Component } from "react";
import { Toolbar, AppBar, IconButton, Typography, Button, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider, Paper } from "@material-ui/core";
import { ControlCameraSharp, LinearScaleSharp, InfoSharp, TableChartSharp, SettingsSharp } from "@material-ui/icons/";
import MenuIcon from "@material-ui/icons/Menu";
import changeToView from "../functions/changeToView";

type Props = {};
type State = {
  /**
   * If the current state is a vertical phone.
   * @type {boolean}
   */
  verticalPhone: boolean;
  open: boolean;
  docked: boolean;
};

const mainBranding = (): JSX.Element => {
  return (
    <React.Fragment>
      <IconButton onClick={() => changeToView("main")} edge="start" color="inherit" aria-label="menu">
        <ControlCameraSharp />
      </IconButton>
      <Button style={{ minWidth: "140px", display: "inline-block", padding: 0, minHeight: 0 }} color={"inherit"}>
        <Typography onClick={() => changeToView("main")} style={{ marginRight: "3%", textTransform: "none" }} variant={"h6"}>
          Control panel
        </Typography>
      </Button>
    </React.Fragment>
  );
};

export default class Navbar extends Component<Props, State> {
  componentWillMount() {
    this.setState({ open: false });
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      this.setState({ verticalPhone: false });
    } else {
      this.setState({ verticalPhone: true });
    }

    mediaQuery.addListener((mq) => {
      if (mq.matches) {
        this.setState({ verticalPhone: false });
      } else {
        this.setState({ verticalPhone: true });
      }
    });
  }

  toggleDrawer = (open: boolean) => {
    //if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    // return;
    //}
    console.log("toggling drawer");
    this.setState({ open: open });
  };

  drawerList = () => (
    <div role="presentation" onClick={() => this.toggleDrawer(false)} onKeyDown={() => this.toggleDrawer(false)}>
      <List color={"primary"}>
        <ListItem button key={"main"} onClick={() => changeToView("main")}>
          <ListItemIcon>
            <ControlCameraSharp></ControlCameraSharp>
          </ListItemIcon>
          <ListItemText>Main</ListItemText>
        </ListItem>
        <ListItem button key={"graphs"} onClick={() => changeToView("graphs")}>
          <ListItemIcon>
            <LinearScaleSharp></LinearScaleSharp>
          </ListItemIcon>
          <ListItemText>Graphs</ListItemText>
        </ListItem>
        <ListItem button key={"registeredUsers"} onClick={() => changeToView("registeredUsers")}>
          <ListItemIcon>
            <TableChartSharp></TableChartSharp>
          </ListItemIcon>
          <ListItemText>Registered users</ListItemText>
        </ListItem>
        <ListItem button key={"settings"} onClick={() => changeToView("settings")}>
          <ListItemIcon>
            <SettingsSharp></SettingsSharp>
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={() => changeToView("about")}>
          <ListItemIcon>
            <InfoSharp></InfoSharp>
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  render(): JSX.Element {
    if (this.state.verticalPhone) {
      return (
        <AppBar color={"primary"} position="fixed" style={{ top: "auto", bottom: 0 }}>
          <Toolbar>
            {mainBranding()}
            <div style={{ width: "100%" }}>
              <IconButton
                style={{ position: "absolute", right: "18px", top: "10%" }}
                onClick={() => {
                  this.toggleDrawer(true);
                }}
              >
                <MenuIcon></MenuIcon>
              </IconButton>
            </div>
          </Toolbar>
          <SwipeableDrawer color={"primary"} anchor="bottom" open={this.state.open} onClose={() => this.toggleDrawer(false)} onOpen={() => this.toggleDrawer(true)}>
            {this.drawerList()}
          </SwipeableDrawer>
        </AppBar>
      );
    }
    return (
      <AppBar component={Paper} color={"primary"} position="static" elevation={10}>
        <Toolbar>
          {mainBranding()}
          <Button onClick={() => changeToView("graphs")} color="inherit">
            Graphs
          </Button>
          <Button onClick={() => changeToView("registeredUsers")} color="inherit">
            Registered users
          </Button>
          <Button color="inherit" onClick={() => changeToView("settings")}>
            Settings
          </Button>
          <Button
            onClick={() => changeToView("about")}
            style={{
              height: "100%",
              position: "absolute",
              right: "5vh",
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
              color: "white",
            }}
            color="inherit"
          >
            About
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
