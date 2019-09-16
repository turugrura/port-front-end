import React, {useState} from 'react';

import { makeStyles, Typography, Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Button } from '@material-ui/core';
import { Favorite as FavoriteIcon, Comment as CommentIcon, Edit as EditIcon, Clear as ClearIcon } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

import { getDateTime, getTitleDisplay } from '../../utils';
import PostCreate from './PostCreate';
import CustomModal from '../modal/CustomModal';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        margin: theme.spacing(0,0,1)
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
    },
    favoriteIcon: {
        color: red[400]
    },
    buttonModal: {
        margin: theme.spacing(0, 2)
    }
}));

const Post = ({ post, currentUser, children, onUpdatePost, onDeletePost }) => {
    const classes = useStyles();
    const { author, title, content, like, comments, createdAt } = post;
    const [isOpenComment, setToggleOpenComment] = useState(false);
    const [isLike, setToggleLike] = useState(false);
    const [isUpdate, setToggleUpdate] = useState(false);
    const [isOpenModal, setToggleModal] = useState(false);

    const onClickCommentIcon = () => {
        if (!currentUser.token) return;        
        setToggleOpenComment(!isOpenComment);
    };

    const onClickFavoriteIcon = () => {
        if (!currentUser.token) return;
        setToggleLike(!isLike);
    };

    const onClickToggleModal = () => {
        setToggleModal(!isOpenModal);
    };
    
    const onClickUpdatePost = newPost => {
        setToggleUpdate(false);
        onUpdatePost(post._id, newPost);
    };

    const onClickDeletePost = () => {
        setToggleModal(!isOpenModal);
        onDeletePost(post._id);
    };
    
    return (
        <Card className={classes.card}>
            <CustomModal title='Delete' description='Do you want do delete the post?' 
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
                    onClick={onClickDeletePost}
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
                        {`${title}`.substr(0,1).toUpperCase()}
                    </Avatar>
                }
                action={
                    currentUser._id === author ? (
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
                title={getTitleDisplay(title)}
                subheader={getDateTime(createdAt)}
            />
            <CardContent
                className={classes.cardContent}
            >
                {
                    isUpdate ? (
                        <PostCreate 
                            onCreatePost={onClickUpdatePost}
                            post={post}
                            textButton='update'
                            textLabel='What your new post?'
                        />
                    ) : (
                        <Typography >
                            {content}
                        </Typography>
                    )
                }                
            </CardContent>
            <CardActions
                className={classes.cardActions}
                disableSpacing={true}
            >
                <IconButton
                    aria-label="add to favorites"
                    onClick={onClickFavoriteIcon}
                >
                    <FavoriteIcon className={isLike ? classes.favoriteIcon : ''} />
                    {` ${like.length}`}
                </IconButton>
                <IconButton
                    onClick={onClickCommentIcon}
                >
                    <CommentIcon />
                    {` ${comments.length}`}
                </IconButton>
            </CardActions>
            {
                isOpenComment ? (
                    <CardContent>
                        {children}
                    </CardContent>
                ) : (
                    null
                ) 
            }            
        </Card>
    )
};

export default Post;