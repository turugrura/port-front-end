import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMyPosts } from '../stores/actions/postAction';

import PostList from '../components/post/PostList';

class PostPage extends Component {
    componentDidMount() {
        if (!this.props.currentUser.token) {
            return this.props.history.push('/');
        };
        
        this.props.fetchMyPosts(this.props.currentUser._id);
    };

    render() {
        if (this.props.posts.length === 0) {
            return (
                <div>Loading posts..</div>
            )
        };

        return (
            <div>
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
    fetchMyPosts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);