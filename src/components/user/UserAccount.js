import React, { useState } from 'react';

import { makeStyles, Grid, Card, CardContent, CardHeader, TextField, Button, Container, Typography } from '@material-ui/core';

import { getDateTime } from '../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    textInput: {
        margin: theme.spacing(3)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    }
}));

const UserAccount = props => {
    const { username, title, role, image, createdAt } = props.currentUser;
    const [ user, setUser ] = useState({
        username,
        title,
        role,
        image
    });

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onClickSave = () => {
        console.log(user)
    };
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <Card

            >
                <CardHeader
                    title={title}
                    subheader={`Sign Up : ` + getDateTime(createdAt)}
                />
                <CardContent

                >
                    <form className={classes.form} onSubmit={onClickSave} >                    
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
                                        required
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