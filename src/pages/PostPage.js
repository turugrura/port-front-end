import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortByCreatedAtAsc, sortByCreatedAtDesc } from '../utils';
import { 
    fetchAllPosts,
    fetchMyPosts,
    createPost,
    updatePost,
    updatePostLike,
    deletePost 
} from '../store/actions/postAction';
import { 
    createComment,
    updateComment,
    deleteComment
} from '../store/actions/commentAction';

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

    onUpdatePost = (postId, newPost) => {
        this.props.updatePost(this.props.currentUser, postId, newPost, this.props.history.location.pathname);
    };

    onDeletePost = postId => {
        this.props.deletePost(this.props.currentUser, postId, this.props.history.location.pathname);
    };

    onUpdatePostLike = postId => {
        this.props.updatePostLike(this.props.currentUser, postId, this.props.history.location.pathname);
    };

    onCreateComment = (postId, newComment) => {
        this.props.createComment(this.props.currentUser, postId, newComment, this.props.history.location.pathname);
    };

    onUpdateComment = (commentId, newComment) => {
        this.props.updateComment(this.props.currentUser, commentId, newComment, this.props.history.location.pathname);
    };

    onDeleteComment = (commentId) => {
        this.props.deleteComment(this.props.currentUser, commentId, this.props.history.location.pathname);
    };

    renderPostList = (posts = []) => {
        return posts.map( post => (
            <Post key={post._id} post={post} currentUser={this.props.currentUser} 
                onUpdatePost={this.onUpdatePost}
                onUpdatePostLike={this.onUpdatePostLike}
                onDeletePost={this.onDeletePost}
            >
                <CommentList 
                    comments={post.comments.sort(sortByCreatedAtAsc)} 
                    currentUser={this.props.currentUser}
                    onUpdateComment={this.onUpdateComment}
                    onDeleteComment={this.onDeleteComment}
                />
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
    updatePost,
    updatePostLike,
    deletePost,
    createComment,
    updateComment,
    deleteComment
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);