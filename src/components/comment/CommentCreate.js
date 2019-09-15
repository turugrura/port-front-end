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

const CommentCreate = props => {
    const classes = useStyles();
    const [ content, setContent ] = useState('');

    const onSubmitForm = e => {
        e.preventDefault();
        if (content.trim() === '') return ;

        props.onCreateComment(props.postId, { content });
        setContent('');
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
                            label="What you think about this post?"
                            autoComplete="off"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
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
                            comment
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Divider />
        </div>
    );
};

export default CommentCreate;