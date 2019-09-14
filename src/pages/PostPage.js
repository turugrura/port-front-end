import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortByCreatedAt } from '../utils';
import { fetchMyPosts, createPost } from '../stores/actions/postAction';
import { getMe } from '../stores/actions/authAction';

import PostList from '../components/post/PostList';
import PostCreate from '../components/post/PostCreate';

class PostPage extends Component {
    componentDidMount() {
        this.props.fetchMyPosts(this.props.currentUser._id);
    };

    componentDidUpdate(prev) {
        if (prev.currentUser.token !== this.props.currentUser.token) {
            return this.props.fetchMyPosts(this.props.currentUser._id);
        };
    };

    onCreatePost = newPost => {
        this.props.createPost(this.props.currentUser, newPost);
    };

    render() {
        // if (this.props.posts.length === 0) {
        //     return (
        //         <div>No post</div>
        //     )
        // };

        return (
            <div>
                <PostCreate onCreatePost={this.onCreatePost} />
                <PostList posts={this.props.posts.sort(sortByCreatedAt)} />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    posts: state.postReducer.posts,
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    fetchMyPosts,
    createPost,
    getMe
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);