import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMyPosts, fetchAllPosts } from '../stores/actions/postAction';

import PostList from '../components/post/PostList';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchAllPosts()
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
    fetchAllPosts,
    fetchMyPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);