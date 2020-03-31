import React, { Component } from "react";
import { Toolbar, AppBar, IconButton, Typography, Button, makeStyles, withStyles, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider  } from "@material-ui/core";
import { ControlCameraSharp } from "@material-ui/icons/";
import MenuIcon from "@material-ui/icons/Menu"
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

type Props = {
  
}
type State = {
  mobile: boolean,
  open: boolean
  docked:boolean
}


const mainBranding = (): JSX.Element => {
  return (
    <React.Fragment>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <ControlCameraSharp />
      </IconButton>
      <Typography style={{ marginRight: "3%" }} variant="h6" >
        Control panel
    </Typography>
      </React.Fragment>
  )
}
 
export default class Navbar extends Component<Props,State> {

  componentWillMount() {
    this.setState({open:false})
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
      this.setState({mobile:false})
    } else {
      this.setState({ mobile: true })
    }
    mediaQuery.addListener((mq) => {
      if (mq.matches) {
        this.setState({ mobile: false })
      } else {
        this.setState({ mobile: true })
      }
    });
  }

  toggleDrawer = (open:boolean) =>{
    //if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
     // return;
    //}
    console.log("toggling drawer")
    this.setState({open:open});
  };

  list = () => (
    <div
      role="presentation"
      onClick={()=>this.toggleDrawer(false)}
      onKeyDown={()=>this.toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render(): JSX.Element {
    if (this.state.mobile) {
      return (<AppBar color="transparent" position="sticky" style={{top:"auto",bottom:0,position:"absolute"}}>
        <Toolbar>{mainBranding()}
          <IconButton onClick={() => {
            this.toggleDrawer(true)
            console.log("hello")
          }}>
          <MenuIcon style={{ paddingLeft: "15vh" }}>
        </MenuIcon>
        </IconButton>
        </Toolbar>
        <SwipeableDrawer
          anchor="bottom"
          open={this.state.open}
          onClose={()=>this.toggleDrawer(false)}
          onOpen={()=>this.toggleDrawer(true)}
        >
          {this.list()}
        </SwipeableDrawer>
      </AppBar>)
    }
    return (
      
      <AppBar color={"transparent"} position="static" elevation={10}>
        <Toolbar>
          {mainBranding()}
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
