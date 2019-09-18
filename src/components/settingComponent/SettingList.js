import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { AccountBox as AccountBoxIcon, People as PeopleIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflowX: 'auto',
},
}));

const SettingList = ({ listSeleted = 0, onChangeListSeleted, currentUser }) => {
        
    const onClickItemList = (indexItem) => {
        onChangeListSeleted(indexItem);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem 
                    button 
                    selected={listSeleted === 0}
                    onClick={() => onClickItemList(0)}
                >
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                </ListItem>
                {
                    currentUser.role !== 'user' ? (
                        <ListItem 
                            button 
                            selected={listSeleted === 1}
                            onClick={() => onClickItemList(1)}
                        >
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    ) : null
                }                
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem
                    button
                    onClick={() => onClickItemList(11)}
                >
                    <ListItemText primary="Change password" />
                </ListItem>
            </List>
        </div>
    );
}

export default SettingList;