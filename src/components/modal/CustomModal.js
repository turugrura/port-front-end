import React from 'react';

import { makeStyles, Modal } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const CustomModal = ({ children, title, description, isOpen, toggleOpen }) => {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                onClose={toggleOpen}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">
                        { title }
                    </h2>
                    <p id="simple-modal-description">
                        { description }
                    </p>
                    {children}
                </div>
            </Modal>
        </div>
    );
};

export default CustomModal;
