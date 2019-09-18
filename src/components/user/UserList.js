import React from 'react';

import { makeStyles, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import User from './User';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        // marginTop: theme.spacing(1),
        overflowX: 'auto',
        
    },
    table: {
        minWidth: 650,
    },
    cell: {
        padding: (10, 5, 10)
    }
}));

const UserList = ({ users = [], currentUser, onUpdateRole }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} >
                <TableHead >
                    <TableRow >
                        <TableCell size='small' align='left' >Sing Up</TableCell>
                        <TableCell size='medium' align='left' >Role</TableCell>
                        <TableCell size='small' align="left" >Username</TableCell>
                        <TableCell size='small' align="left" >Title</TableCell>
                        <TableCell size='medium' align="center" >Updated</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    users.map( user => {
                        return (
                            <User key={user._id}
                                user={user}
                                currentUser={currentUser}
                                onUpdateRole={onUpdateRole}
                            />
                        );
                    })
                }
                </TableBody>
            </Table>
        </Paper>
    );
};

export default UserList;