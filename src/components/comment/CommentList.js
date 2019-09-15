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
        <div>
            {renderCommentList(props.comments)}
        </div>
    );
};

export default CommentList;