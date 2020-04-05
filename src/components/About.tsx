import React, { Component } from 'react';
import { Paper, Typography } from "@material-ui/core";


export default class About extends Component {
    render() {
        return (
          <Paper>
            <Typography variant={"h4"}>Тази апликация беше направена за университетска задача</Typography>
            <br></br>
            <Typography>Име: Драгомир Димитров Първанов</Typography>
            <Typography>Факултетен номер: 170183</Typography>
            <Typography>Специалност "СП", вечерна форма на обучение</Typography>
                <Typography>I Курс</Typography>
                <Typography style={{paddingTop:"5vh"}} variant={"h6"}></Typography>
            <Typography>Целта на тово приложение е да предостави на потребителя възможност да управлява собственият си уеб-сайт</Typography>
            <Typography style={{ marginTop: "3vh" }} variant={"h6"}>
              Is this better than the other control panels?
            </Typography>
            <Typography>Probably not. But we can customize everything here</Typography>
            <Typography style={{ marginTop: "3vh" }} variant={"h6"}>
              What does this control panel offer?
            </Typography>
            <Typography>It offers seeing the current server load, graphs which illustrate the average profit per month and </Typography>
          </Paper>
        );
    }
}


