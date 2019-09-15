import React from 'react';

import { makeStyles, Typography, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';

import { getDateTime, getTitleDisplay } from '../../utils'

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

const Comment = props => {
    const customStyles = useStyles();
    const { author, content, createdAt} = props.comment;

    return (
        <Card className={customStyles.card}>
            <CardHeader
                className={customStyles.cardHeader}
                avatar={
                    <Avatar >
                        {`${author.title}`.substr(0,1).toUpperCase()}
                    </Avatar>
                }
                title={getTitleDisplay(author.title)}
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