import React from 'react';

import { makeStyles } from '@material-ui/core';

import Post from './Post';

const renderPostList = (posts = []) => {
    return posts.map( post => <Post key={post._id} post={post} />);
};

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1
    }
}));

const PostList = props => {
    const customStyles = useStyles();

    return (
        <div className={customStyles.root}>
            {renderPostList(props.posts)}
        </div>
    );
};

export default PostList;