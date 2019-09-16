import React from 'react';

import Comment from './Comment';

const renderCommentList = ({comments = [], onUpdateComment, onDeleteComment, currentUser}) => {
    return comments.map( cm => {
        return (
            <Comment key={cm._id}
                comment={cm}
                currentUser={currentUser}
                onUpdateComment={onUpdateComment} 
                onDeleteComment={onDeleteComment}
            />
        )
    });
};

const CommentList = ({ ...rest }) => {
    return (
        <div>
            {renderCommentList(rest)}
        </div>
    );
};

export default CommentList;