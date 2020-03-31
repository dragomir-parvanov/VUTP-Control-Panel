import React,{ Component } from "react";
import Navbar from "./Navbar";
import RegisteredUsersTable from "./RegisteredUsersTable";

export default class CurrentView extends Component{
    state = {
        currentView: <RegisteredUsersTable/>
    }
    render():JSX.Element {
        return (
            <div >{this.state.currentView}</div>
        )
    }
}