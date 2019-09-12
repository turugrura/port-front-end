import myApi from '../../api/port-back-end';
import {
    // FETCH_POST,
    FETCH_MY_POSTS,
    FETCH_ALL_POSTS
} from './actionTypes';

// const fetchPost = postId => async dispatch => {
//     let 
// };

const fetchMyPosts = (userId) => async dispatch => {
    let posts;
    try {
        posts = await myApi.get(`users/${userId}/posts/comments`);
        if (posts.status === 200 && posts.data.data.length > 0) {
            const authorName = posts.data.data[0].username;
            posts = posts.data.data[0].posts.map( post => {
                const comments = post.comments.map( cm => {
                    return {
                        ...cm
                    };
                });

                return {
                    ...post,
                    authorName,
                    comments
                };
            });
        } else {
            posts = [];
        }
    } catch (error) {
        console.log(error);
        posts = [];
    }

    dispatch({
        type: FETCH_MY_POSTS,
        payload: posts
    });
};

const fetchAllPosts = () => async dispatch => {
    let posts = [];
    try {
        const usersWithPosts = await myApi.get('/users/posts/comments');
        if (usersWithPosts.status === 200) {
            usersWithPosts.data.data.forEach( user => {
                user.posts.forEach( post => {
                    const comments = post.comments.map( cm => {
                        return {
                            ...cm
                        };
                    });

                    posts.push({
                        ...post,
                        authorName: user.username,
                        comments
                    });
                });
            });
        } else {
            posts = [];
        }
    } catch (error) {
        console.log(error);
        posts = [];
    }

    dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts
    });
};

export {
    fetchAllPosts,
    fetchMyPosts
}