import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMyPosts, fetchAllPosts, createPost } from '../store/actions/postAction';
import PostList from '../components/post/PostList';
import PostCreate from '../components/post/PostCreate';
// import { sortByCreatedAt } from '../utils';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchAllPosts();
    };

    onCreatePost = newPost => {
        this.props.createPost(this.props.currentUser, newPost);
    };

    render() {
        if (this.props.posts.length === 0) {
            return (
                <div>Loading posts..</div>
            )
        };

        return (
            <div>
                {
                    this.props.currentUser.token
                    ? <PostCreate onCreatePost={this.onCreatePost} />
                    : null
                }
                
                <PostList posts={this.props.posts} />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    posts: state.postReducer.posts,
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    fetchAllPosts,
    fetchMyPosts,
    createPost
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);