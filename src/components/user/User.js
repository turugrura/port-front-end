import React, { useState } from 'react';

import { makeStyles, TableRow, TableCell, TextField, MenuItem, IconButton } from '@material-ui/core';
import { CheckCircle as CheckCircleIcon } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

import { getDateTime } from '../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        // marginTop: theme.spacing(1),
        overflowX: 'auto',        
    },
    me: {
        backgroundColor: green[200]
    },
    nonActive: {
        backgroundColor: green[200]
    },
    menu: {
        width: 200,
    },
    textField: {
        minWidth: 100
    },
}));

const User = ({ user, currentUser, onUpdateRole }) => {
    const { username, _id, title, role, active, createdAt } = user;
    const [ userUpdated, setUserUpdated ] = useState({
        ...user
    });

    const rolesPower = {
        admin: 99,
        head: 1,
        user: 0
    };
    const roles = [
        { value: 'admin', power: 99},
        { value: 'head', power: 1},
        { value: 'user', power: 0 }
    ];

    const handleChange = name => event => {
        setUserUpdated({
            ...userUpdated,
            [name]: event.target.value
        });
    };

    const onClickUpdateRole = () => {
        onUpdateRole(userUpdated);
    };

    const classes = useStyles();

    return (
        <TableRow className={ currentUser._id === _id ? classes.me : (active ? null : classes.nonActive) }>
            <TableCell align='left' >{getDateTime(createdAt)}</TableCell>
            <TableCell align="left" >
                {
                    rolesPower[currentUser.role] > rolesPower[role] ? (
                        <TextField
                            select
                            className={classes.textField}
                            value={userUpdated.role}
                            onChange={handleChange('role')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {
                                roles.filter( el => el.power < rolesPower[currentUser.role]).map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                    )
                                )
                            }
                        </TextField>
                    ) : (
                        userUpdated.role
                    )
                }                                
            </TableCell>
            <TableCell align='left' >
                { username }                
            </TableCell>
            <TableCell align="left" >
                { title }
            </TableCell>
            <TableCell align='center' >
                {
                    userUpdated.role !== role ? (
                        <IconButton onClick={onClickUpdateRole} >
                            <CheckCircleIcon color='primary' />
                        </IconButton>
                    ) : `No update.`
                }
            </TableCell>            
        </TableRow>
    )
};

export default User;