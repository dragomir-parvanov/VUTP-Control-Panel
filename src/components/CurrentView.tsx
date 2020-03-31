import React,{ Component } from "react";
import LeftPanel from "./LeftPanel";

export default class CurrentView extends Component{
    state = {
        currentView: <LeftPanel/>
    }
    render():JSX.Element {
        return (
            <div style={{ width: "100%" }}>{this.state.currentView}</div>
        )
    }
}