import React from 'react';

import { makeStyles, List, ListItem, ListItemText } from '@material-ui/core';

// import Todo from './Todo';
import { getDateTime } from '../../utils';

const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        // backgroundColor: theme.palette.background.paper
    },
    content: {
        padding: 0,
        paddingLeft: 16,
        'word-break':' break-word',
        'white-space': 'pre-wrap'
    }
}));

const renderTodoList = (customStyles, todos = []) => {
    return todos.map( todo => {
        return (
            <ListItem key={todo._id} alignItems='flex-start'>
                <ListItemText
                    className={customStyles.content}
                    primary={`${todo.topic} (Created: ${getDateTime(todo.createdAt)} Status: ${todo.status})`}
                    secondary={
                        todo.content
                    }
                />
            </ListItem>
        );
    });
};

const TodoList = ({ todos = [] }) => {
    const customStyles = useStyles();

    return (
        <List className={customStyles.root}>
            {renderTodoList(customStyles, todos)}
        </List>
    );
};

export default TodoList;