import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortByCreatedAtAsc, sortByCreatedAtDesc } from '../utils';
import { fetchAllPosts, fetchMyPosts, createPost } from '../store/actions/postAction';
import { createComment } from '../store/actions/commentAction';

import PostCreate from '../components/post/PostCreate';
import Post from '../components/post/Post';
import CommentCreate from '../components/comment/CommentCreate';
import CommentList from '../components/comment/CommentList';

class PostPage extends Component {
    componentDidMount() {
        // console.log(this.props)
        if (this.props.history.location.pathname === '/post') {
            return this.props.fetchMyPosts(this.props.currentUser._id);
        }
        
        this.props.fetchAllPosts();
    };

    onCreatePost = newPost => {
        this.props.createPost(this.props.currentUser, newPost, this.props.history.location.pathname);
    };

    onCreateComment = (postId, newComment) => {
        this.props.createComment(this.props.currentUser, postId, newComment, this.props.history.location.pathname);
    };

    renderPostList = (posts = []) => {
        return posts.map( post => (
            <Post key={post._id} post={post} currentUser={this.props.currentUser} >
                <CommentList comments={post.comments.sort(sortByCreatedAtAsc)} />
                <CommentCreate postId={post._id} onCreateComment={this.onCreateComment} />
            </Post>
        ));
    };

    render() {
        return (
            <div>
                {
                    this.props.currentUser.token
                    ?   
                        <PostCreate onCreatePost={this.onCreatePost} />
                    :
                        <div></div>
                }            
                {this.renderPostList(this.props.posts.sort(sortByCreatedAtDesc))}
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
    fetchAllPosts,
    createPost,
    createComment
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);