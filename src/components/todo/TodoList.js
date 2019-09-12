import React from 'react';

import { makeStyles, List, ListItem, ListItemText } from '@material-ui/core';

// import Todo from './Todo';

const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        // backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: 'inline'
    }
}));

const renderTodoList = (customStyles, todos = []) => {
    return todos.map( todo => {
        return (
            <ListItem key={todo._id} alignItems='flex-start'>
                {/* <ListItemText
                    primary={todo.author}
                    secondary={
                        <React.Fragment>
                            <Typography
                                color='textPrimary'
                                variant='body2'
                                className={customStyles.inline}
                                component='span'
                            >
                                {todo.topic}
                            </Typography>
                            {' - ' + todo.content}
                        </React.Fragment>
                    }
                /> */}
                <ListItemText
                    primary={todo.topic}
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

    if(todos.length === 0) {
        return <div>Loading todos...</div>
    };

    return (
        <List className={customStyles.root}>
            {renderTodoList(customStyles, todos)}
        </List>
    );
};

export default TodoList;