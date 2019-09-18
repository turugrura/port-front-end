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
        confirmNewPassword: ''
    });

    const onChange = e => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    };
    
    const onClickSubmit = e => {
        e.preventDefault();
        if (password.newPassword !== password.confirmNewPassword) return ;

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
                                minLength={8}
                                fullWidth
                                name="oldPassword"
                                label="Old Password"
                                type="password"
                                autoComplete="off"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                minLength={8}
                                fullWidth
                                name="newPassword"
                                label="New Password"
                                type="password"
                                autoComplete="off"
                                onChange={onChange}
                                error={ !(password.newPassword === password.confirmNewPassword) }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                minLength={8}
                                fullWidth
                                name="confirmNewPassword"
                                label="Confirm New Password"
                                type="password"
                                autoComplete="off"
                                onChange={onChange}
                                error={ !(password.newPassword === password.confirmNewPassword) }
                            />
                            {
                                password.newPassword !== password.confirmNewPassword ? (
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
                        disabled={ !(password.newPassword === password.confirmNewPassword) }
                    >
                        Change Password
                    </Button>
                </form>
            </div>
        </Container>
    )
};

export default UserChangePassword;