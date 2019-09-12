import React from 'react';

import Comment from './Comment';

const renderCommentList = (comments = []) => {
    return comments.map( cm => {
        return (
            <Comment key={cm._id} comment={cm} />
        )
    });
};

const CommentList = props => {
    return (
        <React.Fragment>
            {renderCommentList(props.comments)}
        </React.Fragment>
    );
};

export default CommentList;