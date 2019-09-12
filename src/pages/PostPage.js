import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMyPosts } from '../stores/actions/postAction';

import PostList from '../components/post/PostList';

class PostPage extends Component {
    componentDidMount() {
        this.props.fetchMyPosts('5d67f37228a9883cc4e085a9');
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
    posts: state.postReducer.posts
});

const mapDispatchToProps = {
    fetchMyPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);