import React, { useState } from 'react';

import { makeStyles, TextField, Button, Grid } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({    
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 0),
      backgroundColor: red[500],
      textTransform: 'lowercase'
    },
}));


const PostCreate = props => {
    const classes = useStyles();
    const [ content, setContent ] = useState('');

    const onSubmitForm = e => {
        e.preventDefault();
        if (content.trim() === '') return ;

        props.onCreatePost({ content });
        setContent('');
    };

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <Grid container spacing={1} >
                    <Grid item xs={9} sm={6} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="How are you?"
                            autoComplete="off"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                        />
                    </Grid>
                    <Grid item xs={3} sm={2} >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disableFocusRipple={true}
                            className={classes.submit}
                        >
                            Post
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default PostCreate;