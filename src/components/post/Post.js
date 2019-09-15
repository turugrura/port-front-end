import React, {useState} from 'react';

import { makeStyles, Typography, Card, CardContent, CardHeader, CardActions, Avatar, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon, Comment as CommentIcon } from '@material-ui/icons';

import { getDateTime, getTitleDisplay } from '../../utils';
import { red } from '@material-ui/core/colors';

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
    },
    favoriteIcon: {
        color: red[400]
    }
}));

const Post = props => {
    const customStyles = useStyles();
    const { title, content, like, comments, createdAt } = props.post;
    const [isOpenComment, setToggleOpenComment] = useState(false);
    const [isLike, setToggleLike] = useState(false);

    const onClickCommentIcon = () => {
        if (!props.currentUser.token) return;        
        setToggleOpenComment(!isOpenComment);
    };

    const onClickFavoriteIcon = () => {
        if (!props.currentUser.token) return;
        setToggleLike(!isLike);
    };
    
    return (
        <Card className={customStyles.card}>
            <CardHeader
                className={customStyles.cardHeader}
                avatar={
                    <Avatar >
                        {`${title}`.substr(0,1).toUpperCase()}
                    </Avatar>
                }
                title={getTitleDisplay(title)}
                subheader={getDateTime(createdAt)}
            />
            <CardContent
                className={customStyles.cardContent}
            >
                <Typography >
                    {content}
                </Typography>
            </CardContent>
            <CardActions
                className={customStyles.cardActions}
                disableSpacing={true}
            >
                <IconButton
                    aria-label="add to favorites"
                    onClick={onClickFavoriteIcon}
                >
                    <FavoriteIcon className={isLike ? customStyles.favoriteIcon : ''} />
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
                isOpenComment
                ?   <CardContent>
                        {props.children}
                    </CardContent>
                :   null
            }            
        </Card>
    )
};

export default Post;