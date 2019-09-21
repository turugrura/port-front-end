import React, { useState } from 'react';

import { makeStyles, TextField, Container, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const UserChangePassword = ({ currentUser, onChangePassword }) => {
    const [ password, setPassword ] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const onChange = e => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    };
    
    const onClickSubmit = e => {
        e.preventDefault();
        if (password.newPassword !== password.confirmPassword) return ;
        setPassword({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        });

        onChangePassword(password);
    };

    const classes = useStyles();

    return (
        <Container component='main' maxWidth='xs' >
            <div className={classes.paper}>
                <form onSubmit={onClickSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="oldPassword"
                                label="Old Password"
                                type="password"
                                autoComplete="off"
                                value={password.oldPassword}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="newPassword"
                                label="New Password"
                                type="password"
                                autoComplete="off"
                                value={password.newPassword}
                                onChange={onChange}
                                error={ !(password.newPassword === password.confirmPassword) }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm New Password"
                                type="password"
                                autoComplete="off"
                                value={password.confirmPassword}
                                onChange={onChange}
                                error={ !(password.newPassword === password.confirmPassword) }
                            />
                            {
                                password.newPassword !== password.confirmPassword ? (
                                    <Typography contextMenu='dd'>Password not the same to Confirm password.</Typography>                            
                                ) : null
                            }
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={(
                                    !(password.newPassword === password.confirmPassword)
                                    || (!password.oldPassword || password.oldPassword.length < 8)
                                    || (!password.newPassword || password.newPassword.length < 8)
                                )}
                    >
                        Change Password
                    </Button>
                </form>
            </div>
        </Container>
    )
};

export default UserChangePassword;