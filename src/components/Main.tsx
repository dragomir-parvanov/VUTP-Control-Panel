import { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import React from "react";

export default class Main extends Component{
    render():JSX.Element {
        return (<Paper > 
            <Typography>
                Server is running
            </Typography>
         
        </Paper>)
    }
}