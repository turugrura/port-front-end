import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles, AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles( theme => ({
    flexGrow: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing(2)
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
                    variant='h5'
                    display='inline'
                >
                    {currentUser.username}
                </Typography>
                <Button
                    to='/signout'
                    component={AdapterLink}
                    color='inherit'
                    className={classes.button}
                >
                    Sign out
                </Button>
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
                        <Home />
                    </IconButton>                    
                    {renderButtonWithAuth(classes, props.currentUser)}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;