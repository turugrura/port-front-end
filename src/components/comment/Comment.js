import React, { useState } from 'react';

import { makeStyles, Typography, Card, CardContent, CardHeader, Avatar, IconButton, Button } from '@material-ui/core';
import { Edit as EditIcon, Clear as ClearIcon } from '@material-ui/icons';

import { getDateTime, getTitleDisplay } from '../../utils';
import CommentCreate from './CommentCreate';
import CustomModal from '../modal/CustomModal';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        // maxHeight: 250
    },
    cardHeader: {
        // paddingLeft: 16
    },
    cardContent: {
        padding: 0,
        paddingLeft: 16,
        'word-break':' break-word',
        'white-space': 'pre-wrap'
    },
    cardActions: {
        padding: 0,
        paddingLeft: 16
    }
}));

const Comment = ({ comment, onUpdateComment, onDeleteComment, currentUser }) => {
    const [isUpdate, setToggleUpdate] = useState(false);
    const [isOpenModal, setToggleModal] = useState(false);

    const { author, content, createdAt} = comment;
    const classes = useStyles();

    const onClickToggleModal = () => {
        setToggleModal(!isOpenModal);
    };

    const onClickUpdateComment = (postId, newComment) => {
        setToggleUpdate(false);
        onUpdateComment(comment._id, newComment);
    };

    const onClickDeleteComment = () => {
        setToggleModal(!isOpenModal);
        onDeleteComment(comment._id);
    };

    return (
        <Card className={classes.card}>
            <CustomModal title='Delete comment' description='Do you want do delete the comment?' 
                isOpen={isOpenModal}
                toggleOpen={onClickToggleModal}
            >
                <Button 
                    size='small'
                    variant='contained'
                    onClick={() => setToggleModal(!isOpenModal)}
                    className={classes.buttonModal}
                >
                    Cancel
                </Button>
                <Button 
                    size='small'
                    variant='contained'
                    onClick={onClickDeleteComment}
                    className={classes.buttonModal}
                    color='secondary'
                >
                    Yes
                </Button>
            </CustomModal>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Avatar >
                        {`${author.title}`.substr(0,1).toUpperCase()}
                    </Avatar>
                }
                action={
                    currentUser._id === author._id ? (
                        <div>
                            <IconButton aria-label="edit" size='small' onClick={() => setToggleUpdate(!isUpdate)} >
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="edit" size='small' onClick={() => setToggleModal(!isOpenModal)} >
                                <ClearIcon color='error' />
                            </IconButton>
                        </div>                        
                    ) : (
                        null
                    )                    
                }
                title={getTitleDisplay(author.title)}
                subheader={getDateTime(createdAt)}
            />
            <CardContent
                className={classes.cardContent}
            >
                {
                    isUpdate ? (
                        <CommentCreate 
                            onCreateComment={onClickUpdateComment}
                            comment={comment}
                            textButton='update comment'
                            textLabel='What your new comment?'
                        />
                    ) : (
                        <Typography >
                            {content}
                        </Typography>
                    )
                }
            </CardContent>
        </Card>
    );
};

export default Comment;