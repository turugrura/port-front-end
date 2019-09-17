import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { AccountBox as AccountBoxIcon, People as PeopleIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


const SettingList = props => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
        
    const onClickItemList = (indexItem) => {
        setSelectedIndex(indexItem);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem 
                    button 
                    selected={selectedIndex === 0}
                    onClick={() => onClickItemList(0)}
                >
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                </ListItem>
                <ListItem 
                    button 
                    selected={selectedIndex === 1}
                    onClick={() => onClickItemList(1)}
                >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Change password" />
                </ListItem>
            </List>
        </div>
    );
}

export default SettingList;