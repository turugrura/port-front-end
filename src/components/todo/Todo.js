import React, { useState } from 'react';

import { makeStyles, TableRow, TableCell, IconButton, TextField } from '@material-ui/core';
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

const Todo = ({ todo, currentUser, onUpdateTodo, onDeleteTodo }) => {
    const { author: authorId, topic, content, status, createdAt } = todo;
    const [ isOpenUpdate, toggleOpenUpdate ] = useState(false);
    const [ newTodo, setNewTodo ] = useState({
        topic,
        content,
        status
    });

    const onChange = e => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value
        })
    };

    const onClickUpdateTodo = () => {
        if(newTodo.topic.trim() === '') return;
        if(newTodo.content.trim()  === '') return;

        toggleOpenUpdate(!isOpenUpdate);

        onUpdateTodo(todo._id, newTodo);
        // console.log(newTodo)
    };

    const onClickDeleteTodo = () => {
        onDeleteTodo(todo._id);
    };

    const onToggleOpenUpdate = () => {
        toggleOpenUpdate(!isOpenUpdate)
        setNewTodo({
            topic,
            content,
            status
        });
    };
    
    const classes = useStyles();

    return (
        <TableRow>
            {
                currentUser._id === authorId ? (
                    <TableCell padding='checkbox' align='center' >
                        <IconButton onClick={onToggleOpenUpdate}>
                            <EditIcon />
                        </IconButton>
                        {
                            isOpenUpdate ? (
                                <div>
                                    <IconButton onClick={onClickUpdateTodo}>
                                        <DoneIcon color='primary' />
                                    </IconButton>
                                    <IconButton onClick={onClickDeleteTodo}>
                                        <DeleteForeverIcon color='error' />
                                    </IconButton>
                                </div>                                
                            ) : null
                        }
                    </TableCell>                        
                ) : (
                    null
                )
            }            
            <TableCell padding='none' align='left' >{getDateTime(createdAt)}</TableCell>
            <TableCell align='left' className={classes.todoMultiline} >
                {
                    isOpenUpdate ? (
                        <TextField
                            required
                            name='topic'
                            value={newTodo.topic}
                            onChange={onChange}
                            multiline
                        >
                            { topic }
                        </TextField>
                    ) : (
                        topic
                    )
                }
            </TableCell>
            <TableCell padding='none' align="left" className={classes.todoMultiline} >
                {
                        isOpenUpdate ? (
                            <TextField
                                required
                                name='content'
                                value={newTodo.content}
                                onChange={onChange}
                                multiline
                            >
                                { content }
                            </TextField>
                        ) : (
                            content
                        )
                    }
            </TableCell>
            <TableCell align="right" >
                { status }
            </TableCell>
        </TableRow>            
    );
};

export default Todo;