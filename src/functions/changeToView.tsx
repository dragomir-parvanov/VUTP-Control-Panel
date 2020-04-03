import React from "react"
import RegisteredUsersTable from "../components/RegisteredUsersTable";
import gCurrentView from "../globals/gCurrentView";
import Main from "../components/Main";
import Graphs from "../components/Graphs";

const views = {
    main: <Main/>,
    registeredUsers: <RegisteredUsersTable />,
    graphs: <Graphs/>,
    settings: <div />,
    about: <div />,
    rado:<div/>
}


export default function changeToView(view: keyof typeof views): void{
    gCurrentView.next(views[view])
}

changeToView("rado")