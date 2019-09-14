import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMyPosts, fetchAllPosts } from '../stores/actions/postAction';
import PostList from '../components/post/PostList';
import { sortByCreatedAt } from '../utils';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchAllPosts();
    };    

    render() {
        if (this.props.posts.length === 0) {
            return (
                <div>Loading posts..</div>
            )
        };

        return (
            <div>
                <PostList posts={this.props.posts.sort(sortByCreatedAt)} />
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