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

const PostCreate = ({ 
    onCreatePost,
    post,
    textButton = `Post`,
    textLabel = "How are you?"
}) => {
    const classes = useStyles();
    const [ newPost, setNewPost ] = useState( post ? post : { content: ''});

    const onSubmitForm = e => {
        e.preventDefault();

        onCreatePost(newPost);
        setNewPost({
            content: ''
        });
    };

    const onChange = e => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <Grid container spacing={0} >
                    <Grid item xs={12} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            multiline
                            required
                            label={ textLabel }
                            autoComplete="off"
                            name='content'
                            onChange={onChange}
                            value={newPost.content}
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

export default PostCreate;