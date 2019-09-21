import React, { useState } from 'react';

import { makeStyles, TableRow, TableCell, IconButton, TextField, MenuItem } from '@material-ui/core';
import { Edit as EditIcon, Done as DoneIcon, DeleteForever as DeleteForeverIcon } from '@material-ui/icons';

import { getDateTime } from '../../utils';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1
    },
    todoMultiline: {
        'word-break':' break-word',
        'white-space': 'pre-wrap'
    },
    menu: {
        width: 200,
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

    const onChange = field => e => {
        setNewTodo({
            ...newTodo,
            [field]: e.target.value
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

    const statusTodo = [
        { value: 'none'},
        { value: 'undo'},
        { value: 'doing'},
        { value: 'done'},
    ];
    
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
            <TableCell padding='none' align='left' >
                {getDateTime(createdAt)}
            </TableCell>
            <TableCell align='left' className={classes.todoMultiline} >
                {
                    isOpenUpdate ? (
                        <TextField
                            required
                            value={newTodo.topic}
                            onChange={onChange('topic')}
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
                                value={newTodo.content}
                                onChange={onChange('content')}
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
                {
                    isOpenUpdate ? (
                        <TextField
                            select
                            className={classes.textField}
                            value={newTodo.status}
                            onChange={onChange('status')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {
                                statusTodo.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                    )
                                )
                            }
                        </TextField>
                    ) : (
                        status
                    )
                }
            </TableCell>
        </TableRow>            
    );
};

export default Todo;