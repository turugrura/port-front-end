import React, { useState } from 'react';

import { urlUsersImage } from '../../api/port-back-end';

import { 
    makeStyles,
    Grid,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    TextField,
    Button,
    Container,
    Typography,
    // IconButton
} from '@material-ui/core';

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
    },
    button: {
        margin: theme.spacing(2)
    },
    card : {
        margin: theme.spacing(2)
    },
    media: {
        height: 200,
        width: 200,
        // paddingTop: '100%', // 16:9
        margin: theme.spacing(2),
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const UserAccount = ({ currentUser, onUpdatedCurrentUser }) => {
    const { username, title, role, image, image: imagePath, createdAt, updatedAt } = currentUser;
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

        console.log(user)
        onUpdatedCurrentUser(user);
    };

    const onSelectFile = async e => {        
        setUser({
            ...user,
            image: e.target.files[0] || ''
        });        
    };
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card

            >
                <CardHeader                    
                    title={title}
                    subheader={role}
                />                
                <CardContent

                >
                    <form className={classes.form} >                        
                        <Container  component="main" maxWidth="md">
                            <Grid container spacing={3} >
                                <Grid item xs={12}>
                                    <Typography variant='body2'>
                                        {`Signed Up : ` + getDateTime(createdAt)}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {`Lasted Update : ` + getDateTime(updatedAt)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.center}>
                                    <CardMedia className={classes.media}
                                        component='img'
                                        alt='my profile'
                                        image={urlUsersImage + '/' + imagePath}
                                        title='user image'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='file'
                                        name='filePath'
                                        fullWidth
                                        onChange={onSelectFile}
                                        className={classes.textInput}
                                    />
                                </Grid>
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
                                    <Button
                                        type='submit'
                                        color='primary'
                                        fullWidth
                                        variant='contained'
                                        onClick={onClickSubmitForm}
                                        className={classes.button}
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