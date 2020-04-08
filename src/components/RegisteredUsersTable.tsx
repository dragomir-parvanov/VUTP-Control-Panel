import React, { Component } from "react";
import { TableContainer, Paper, TableHead, TableRow, TableCell, Container, TableBody, Table, withStyles } from "@material-ui/core";
import generateRandomRegistration from "../functions/generateRandomRegistration";
import RegistrationModel from "../models/RegistrationModel";

const users = Array(30)
  .fill(0)
  .map(() => generateRandomRegistration());

type Props = {};

type State = { tableEntities: RegistrationModel[] };

export default class RegisteredUsersTable extends Component<Props, State> {
  state: State = {
    tableEntities: users,
  };

  initializeScrollHandler = () => {
    window.onscroll = (ev: Event) => {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        this.setState(({ tableEntities }) => {
          return {
            tableEntities: [
              ...tableEntities,
              ...Array(3)
                .fill(0)
                .map(() => generateRandomRegistration()),
            ],
          };
        });
      }
    };
  };

  componentDidMount() {
    this.initializeScrollHandler();
  }

  render(): JSX.Element {
    return (
      <TableContainer component={Paper} elevation={10}>
        <Table>
          <TableHead component={Paper} elevation={2}>
            <TableRow>
              <TableCell style={{ fontWeight: 1000 }}>Name</TableCell>
              <TableCell style={{ fontWeight: 1000 }}>Age</TableCell>
              <TableCell style={{ fontWeight: 1000 }}>Country</TableCell>
              <TableCell style={{ fontWeight: 1000 }}>Email</TableCell>
              <TableCell style={{ fontWeight: 1000 }}>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.tableEntities.map((u) => {
              return (
                <TableRow key={u.email}>
                  <TableCell>{u.name}</TableCell>
                  <TableCell>{u.age}</TableCell>
                  <TableCell>{u.country}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.phoneNumber}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
