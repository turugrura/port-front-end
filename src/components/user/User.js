import React, { useState } from 'react';

import { makeStyles, TableRow, TableCell, IconButton } from '@material-ui/core';
import { Edit as EditIcon, Done as DoneIcon, DeleteForever as DeleteForeverIcon } from '@material-ui/icons';

import { getDateTime } from '../../utils';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1
    },
    todoMultiline: {
        'word-break':' break-word',
        'white-space': 'pre-wrap'
    }
}));

const User = ({ user, currentUser }) => {
    const { username, title, role, active, createdAt } = user;

    // const onChange = e => {
    //     setNewTodo({
    //         ...newTodo,
    //         [e.target.name]: e.target.value
    //     })
    // };

    // const onClickUpdateTodo = () => {
    //     if(newTodo.topic.trim() === '') return;
    //     if(newTodo.content.trim()  === '') return;

    //     toggleOpenUpdate(!isOpenUpdate);

    //     onUpdateTodo(todo._id, newTodo);
    // };

    // const onClickDeleteTodo = () => {
    //     onDeleteTodo(todo._id);
    // };

    // const onToggleOpenUpdate = () => {
    //     toggleOpenUpdate(!isOpenUpdate)
    //     setNewTodo({
    //         topic,
    //         content,
    //         status
    //     });
    // };
    
    const classes = useStyles();

    return (
        <TableRow>
            <TableCell padding='none' align='left' >{ active ? 'active' : 'not active' }</TableCell>
            <TableCell padding='none' align='left' >{getDateTime(createdAt)}</TableCell>
            <TableCell align='left' className={classes.todoMultiline} >
                { username }                
            </TableCell>
            <TableCell padding='none' align="left" className={classes.todoMultiline} >
                { title }
            </TableCell>
            <TableCell align="right" >
                { role }
            </TableCell>
        </TableRow>            
    );
};

export default User;