import React from 'react';

import { makeStyles, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import User from './User';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(1),
        overflowX: 'auto',
        
    },
    table: {
        minWidth: 650,
    },
    cell: {
        padding: (10, 5, 10)
    }
}));

const UserList = ({ users = [] }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead >
                    <TableRow >
                        <TableCell padding='checkbox' ></TableCell>
                        <TableCell padding='none' size='medium' align='left' >Created</TableCell>
                        <TableCell size='small' align="left">Topic</TableCell>
                        <TableCell padding='none' size='small' align="left">Content</TableCell>
                        <TableCell size='small' align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    users.map( user => {
                        return (
                            <User key={user._id}
                                user={user}
                            />
                        )
                    })
                }
                </TableBody>
            </Table>
        </Paper>
    );
};

export default UserList;