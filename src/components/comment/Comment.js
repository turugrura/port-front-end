import React from 'react';

import { makeStyles, Typography, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';

import { getDateTime } from '../../utils'

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
    }
}));

const Comment = props => {
    const customStyles = useStyles();
    const { author, content, createdAt} = props.comment;

    return (
        <Card className={customStyles.card}>
            <CardHeader
                className={customStyles.cardHeader}
                avatar={
                    <Avatar >
                        {`${author.username}`.substr(0,1).toUpperCase()}
                    </Avatar>
                }
                title={author.username}
                subheader={getDateTime(createdAt)}
            />
            <CardContent
                className={customStyles.cardContent}
            >
                <Typography>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comment;