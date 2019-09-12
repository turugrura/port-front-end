import React, {useState} from 'react';

import { makeStyles, Typography, Card, CardContent, CardHeader, CardActions, Avatar, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon, Comment as CommentIcon } from '@material-ui/icons';

import { getDateTime } from '../../utils';
import CommentList from '../comment/CommentList';
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
        paddingLeft: 16
    },
    cardActions: {
        padding: 0,
        paddingLeft: 16
    },
    favoriteIcon: {
        color: red[300]
    }
}));



const Post = props => {
    const customStyles = useStyles();
    const { authorName, content, comments, createdAt } = props.post;
    const [isOpenComment, setToggleOpenComment] = useState(false);
    const [isLike, setToggleLike] = useState(false);

    const onClickCommentIcon = () => {
        setToggleOpenComment(!isOpenComment);
    };

    const onClickFavoriteIcon = () => {
        setToggleLike(!isLike);
    };
    
    return (
        <Card className={customStyles.card}>
            <CardHeader
                className={customStyles.cardHeader}
                avatar={
                    <Avatar >
                        {`${authorName}`.substr(0,1).toUpperCase()}
                    </Avatar>
                }
                title={authorName}
                subheader={getDateTime(createdAt)}
            />
            <CardContent
                className={customStyles.cardContent}
            >
                <Typography>
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
                </IconButton>
                <IconButton
                    onClick={onClickCommentIcon}
                >
                    <CommentIcon />
                    {` ${comments.length}`}
                </IconButton>
            </CardActions>
            {
                isOpenComment && comments.length > 0
                ?   <CardContent>
                        <CommentList comments={comments} />
                    </CardContent>
                :   <div></div>
            }            
        </Card>
    )
};

export default Post;