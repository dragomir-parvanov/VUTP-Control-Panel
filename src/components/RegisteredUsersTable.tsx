import React,{ Component } from "react";
import { TableContainer, Paper, TableHead, TableRow, TableCell, Container, TableBody, Table, withStyles } from "@material-ui/core";

export default class RegisteredUsersTable extends Component{
    render(): JSX.Element{
        return (<TableContainer component={Paper} elevation={10}>
            <Table>
                <TableHead component={Paper} elevation={2}>
                <TableRow >
                        <TableCell style={{fontWeight: 1000 }} >Name</TableCell>
                        <TableCell style={{ fontWeight: 1000 }}  >Age</TableCell>
                        <TableCell style={{ fontWeight: 1000 }}>Country</TableCell>
                        <TableCell style={{ fontWeight: 1000 }} >Email</TableCell>
                    <TableCell style={{ fontWeight: 1000 }}>Number</TableCell>
                </TableRow>
            </TableHead>
            <TableBody style={{marginBlock:"50vh"}}>
                <TableRow>
                        <TableCell >
                            asd
                    </TableCell>
                        <TableCell>
                            asd
                    </TableCell>
                        <TableCell>
                            asd
                    </TableCell>
                        <TableCell>
                            asd
                    </TableCell>
                        <TableCell>
                            asd
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </TableContainer>)
    }
}