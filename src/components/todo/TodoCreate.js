import React, { useState } from 'react';

import { makeStyles, TextField, Button, Grid, Divider } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({    
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(0, 0, 3),
      backgroundColor: blueGrey[500],
      textTransform: 'lowercase'
    },
}));

const TodoCreate = ({
    onCreateTodo,
    todo,
    textButton = 'create',
    textLabelTopic = 'Topic',
    textLabelContent = 'What you want todo?'
}) => {
    const classes = useStyles();
    const [ newTodo, setNewTodo ] = useState({
        topic: todo ? todo.topic : '',
        content: todo ? todo.content : ''
    });

    const onSubmitForm = e => {
        e.preventDefault();

        onCreateTodo(newTodo);
        setNewTodo({
            topic: '',
            content: ''
        });
    };

    const onChange = e => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <Grid container spacing={1} >
                    <Grid item xs={4} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label={ textLabelTopic }
                            required
                            name="topic"
                            autoComplete="off"
                            onChange={onChange}
                            value={newTodo.topic}
                        />
                    </Grid>
                    <Grid item xs={8} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            multiline
                            name='content'
                            required
                            label={ textLabelContent }
                            autoComplete="off"
                            onChange={onChange}
                            value={newTodo.content}
                        />
                    </Grid>
                    <Grid item xs={3} >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disableFocusRipple={true}
                            className={classes.submit}
                        >
                            { textButton }
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Divider />
        </div>
    );
};

export default TodoCreate;