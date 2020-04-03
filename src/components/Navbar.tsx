import React, { Component } from "react";
import { Toolbar, AppBar, IconButton, Typography, Button, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { ControlCameraSharp, Star, StarBorderTwoTone } from "@material-ui/icons/";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import changeToView from "../functions/changeToView";
import gCurrentView from "../globals/gCurrentView";
import RegisteredUsersTable from "./RegisteredUsersTable";

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
      <IconButton edge="start" color="inherit" aria-label="menu">
        <ControlCameraSharp />
      </IconButton>
      <Typography style={{ marginRight: "3%" }} variant="h6">
        Control panel
      </Typography>
    </React.Fragment>
  );
};

const aboutButton = (): JSX.Element => {
  return (
    <Button
      style={{
        height: "100%",
        position: "absolute",
        right: "5vh",
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
        color: "white"
      }}
      color="inherit"
    >
      About
    </Button>
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

    mediaQuery.addListener(mq => {
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
      <List>
        {[
          { name: "Main", viewName: "main" },
          { name: "Graphs", viewName: "graphs" },
          { name: "Registered users", viewName: "registeredUsers" },
          { name: "Settings", viewName: "settings" }
        ].map((info, index) => (
          <ListItem button key={info.name} onClick={() => changeToView(info.viewName as never)}>
            <ListItemIcon>{index % 2 === 0 ? <Star /> : <StarBorderTwoTone />}</ListItemIcon>
            <ListItemText primary={info.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem onClick={() => changeToView("about")}>
          <ListItemText> About</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  render(): JSX.Element {
    if (this.state.verticalPhone) {
      return (
        <AppBar color="default" position="fixed" style={{ top: "auto", bottom: 0 }}>
          <Toolbar>
            {mainBranding()}
            <IconButton
              onClick={() => {
                this.toggleDrawer(true);
                console.log("hello");
              }}
            >
              <MenuIcon style={{ marginLeft: "25vh" }}></MenuIcon>
            </IconButton>
          </Toolbar>
          <SwipeableDrawer anchor="bottom" open={this.state.open} onClose={() => this.toggleDrawer(false)} onOpen={() => this.toggleDrawer(true)}>
            {this.drawerList()}
          </SwipeableDrawer>
        </AppBar>
      );
    }
    return (
      <AppBar color={"transparent"} position="static" elevation={10} style={{ marginBottom: "3vh" }}>
        <Toolbar>
          {mainBranding()}
          <Button onClick={() => changeToView("main")} color="inherit">
            Main
          </Button>
          <Button color="inherit">Graphs</Button>
          <Button onClick={() => changeToView("registeredUsers")} color="inherit">
            Registered users
          </Button>
          <Button color="inherit" onClick={() => gCurrentView.next(<RegisteredUsersTable />)}>
            Settings
          </Button>
          {aboutButton()}
        </Toolbar>
      </AppBar>
    );
  }
}
