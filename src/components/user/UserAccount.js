import React, { useState } from 'react';

import { makeStyles, Grid, Card, CardContent, CardHeader, TextField, Button, Container, Typography } from '@material-ui/core';

import { getDateTime } from '../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    textInput: {
        margin: theme.spacing(2)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    }
}));

const UserAccount = ({ currentUser, onUpdatedCurrentUser }) => {
    const { username, title, role, image, createdAt, updatedAt } = currentUser;
    const [ user, setUser ] = useState({
        username,
        title,
        image
    });

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onClickSubmitForm = e => {
        e.preventDefault();

        onUpdatedCurrentUser(user);
    };
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <Card

            >
                <CardHeader
                    title={title}
                    subheader={`Sign Up : ` + getDateTime(createdAt) + ` / Lasted Update : ` + getDateTime(updatedAt)}
                    
                >M</CardHeader>
                <CardContent

                >
                    <form className={classes.form} >                    
                        <Container  component="main" maxWidth="md">
                            <Grid container spacing={3} >
                                <Typography variant='h4'>
                                    {role}
                                </Typography>
                                <Grid item xs={12}>
                                    <TextField
                                        name='title'
                                        value={user.title}
                                        fullWidth
                                        required
                                        variant='outlined'
                                        autoComplete='off'
                                        label='Title'
                                        onChange={onChange}
                                        className={classes.textInput}
                                    />  
                                    </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name='username'
                                        value={user.username}
                                        fullWidth
                                        required
                                        variant='outlined'
                                        autoComplete='off'
                                        label='Username'
                                        onChange={onChange}
                                        className={classes.textInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name='image'
                                        value={user.image}
                                        fullWidth
                                        variant='outlined'
                                        autoComplete='off'
                                        label='Image'
                                        onChange={onChange}
                                        className={classes.textInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type='submit'
                                        color='primary'
                                        fullWidth
                                        variant='contained'
                                        onClick={onClickSubmitForm}
                                    >
                                        save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserAccount;