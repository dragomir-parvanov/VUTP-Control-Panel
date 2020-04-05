import React from "react";
import RegisteredUsersTable from "../components/RegisteredUsersTable";
import gCurrentView from "../globals/gCurrentView";
import Main from "../components/Main";
import Graphs from "../components/Graphs";
import Settings from "../components/Settings";
import About from "../components/About";

const views = {
  main: <Main />,
  registeredUsers: <RegisteredUsersTable />,
  graphs: <Graphs />,
  settings: <Settings />,
  about: <About />,
};

export default function changeToView(view: keyof typeof views): void {
  gCurrentView.next(views[view]);
}
