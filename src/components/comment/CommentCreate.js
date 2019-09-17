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

const CommentCreate = ({
    onCreateComment,
    postId,
    comment,
    textButton = `comment`,
    textLabel = "What you think about this post?"
}) => {
    const classes = useStyles();
    const [ newComment, setNewComment ] = useState({
        content: comment ? comment.content : ''
    });

    const onSubmitForm = e => {
        e.preventDefault();
        if (newComment.content.trim() === '') return ;

        onCreateComment(postId, newComment);
        setNewComment({
            content: ''
        });
    };

    const onChange = e => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        })
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
                            label={textLabel}
                            autoComplete="off"
                            name='content'
                            onChange={onChange}
                            value={newComment.content}
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
                            {textButton}
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Divider />
        </div>
    );
};

export default CommentCreate;