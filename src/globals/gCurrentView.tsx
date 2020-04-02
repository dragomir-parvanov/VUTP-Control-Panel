import {BehaviorSubject } from "rxjs"
import React from "react"

const gCurrentView = new BehaviorSubject<JSX.Element>(<div></div>);

export default gCurrentView
