import React, { useState } from 'react';

import { makeStyles, Grid, Card, CardContent, CardHeader, CardActions, TextField, Button, Container } from '@material-ui/core';

import { getDateTime } from '../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    textInput: {
        margin: theme.spacing(3)
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
                    <Container  component="main" maxWidth="md">
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                            <TextField
                                name='title'
                                value={user.title}
                                fullWidth
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
                                variant='outlined'
                                autoComplete='off'
                                label='Username'
                                onChange={onChange}
                                className={classes.textInput}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                name='role'
                                value={user.role}
                                fullWidth
                                variant='outlined'
                                disabled
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
                        </Grid>
                    </Container>                    
                </CardContent>
                <CardActions>
                    <Button onClick={onClickSave}>
                        save
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default UserAccount;