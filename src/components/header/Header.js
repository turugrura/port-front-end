import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles, AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import { Home as HomeIcon, Settings as SettingsIcon, Input as InputIcon } from '@material-ui/icons';

const useStyles = makeStyles( theme => ({
    flexGrow: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing(1)
    },
    signInIcon: {
        margin: theme.spacing(0, 3, 0)
    }
}));

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const renderButtonWithAuth = (classes, currentUser) => {
    const isSignedIn = currentUser.token ? true : false;

    if (isSignedIn) {
        return (
            <>
                <Button
                    to='/post'
                    component={AdapterLink}
                    color='inherit'
                    className={classes.button}
                >
                    Post
                </Button>
                <Button
                    to='/todo'
                    component={AdapterLink}
                    color='inherit'
                    className={classes.button}
                >
                    Todo
                </Button>
                <div className={classes.flexGrow} />
                <Typography
                    variant='h6'
                    display='inline'
                >
                    {`${currentUser.title}`.substr(0,10)}
                </Typography>
                {/* <Button
                    to='/signout'
                    component={AdapterLink}
                    color='inherit'
                    className={classes.button}
                >
                    Sign out
                </Button> */}
                <IconButton
                    to='/signout'
                    component={AdapterLink}
                    color='inherit'
                    className={classes.signInIcon}
                >
                    <InputIcon />
                </IconButton>
                <IconButton
                    to='/setting'
                    component={AdapterLink}
                    edge='start'
                    color='inherit'
                    // className={classes.signInIcon}
                >
                    <SettingsIcon />
                </IconButton>
            </>
        );
    } else {
        return (
            <>
                <div className={classes.flexGrow} />
                <Button
                    to='/signin'
                    component={AdapterLink}
                    color='inherit'
                    className={classes.button}
                >
                    Sing in
                </Button>
                <Button
                    to='/signup'
                    component={AdapterLink}
                    color='inherit'
                    className={classes.button}
                >
                    Sign up
                </Button>
            </>
        );
    }
};

const Header = (props) => {
    const classes = useStyles();
    console.log(props.currentUser)

    return (
        <div className={classes.flexGrow}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        to='/'
                        component={AdapterLink}
                        edge='start'
                        color='inherit'
                    >
                        <HomeIcon />
                    </IconButton>                    
                    {renderButtonWithAuth(classes, props.currentUser)}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;