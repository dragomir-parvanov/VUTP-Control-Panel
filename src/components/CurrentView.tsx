import React, { Component } from "react";
import Navbar from "./Navbar";
import RegisteredUsersTable from "./RegisteredUsersTable";
import gCurrentView from "../globals/gCurrentView";
import changeToView from "../functions/changeToView";
type Props = {};

type State = {
  currentView: JSX.Element;
};
export default class CurrentView extends Component<Props, State> {
  componentWillMount() {
    changeToView("about");
    this.setState({ currentView: gCurrentView.getValue() });
  }
  componentDidMount() {
    gCurrentView.subscribe({
      next: (view) => {
        this.setState({ currentView: view });
      },
    });
  }
  render(): JSX.Element {
    return <div style={{ paddingTop: "3vh", paddingBottom: "60px" }}>{this.state.currentView}</div>;
  }
}
