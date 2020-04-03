import React from "react"
import RegisteredUsersTable from "../components/RegisteredUsersTable";
import gCurrentView from "../globals/gCurrentView";
import Main from "../components/Main";

const views = {
    main: <Main/>,
    registeredUsers: <RegisteredUsersTable />,
    graphs: <div/>,
    settings: <div />,
    about: <div />,
    rado:<div/>
}


export default function changeToView(view: keyof typeof views): void{
    gCurrentView.next(views[view])
}

changeToView("rado")