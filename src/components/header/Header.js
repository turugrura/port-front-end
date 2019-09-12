import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles, AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
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

const Header = () => {
    const classes = useStyles();

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
                    <Button
                        to='/auth'
                        component={AdapterLink}
                        color='inherit'
                        className={classes.button}
                    >
                        Login/Signup
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;