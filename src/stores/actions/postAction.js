import myApi from '../../api/port-back-end';
import {
    // FETCH_POST,
    FETCH_MY_POSTS,
    FETCH_ALL_POSTS,
    CREATE_POST
} from './actionTypes';

// const fetchPost = postId => async dispatch => {
//     let 
// };

const fetchMyPosts = (userId) => async dispatch => {
    let posts;
    try {
        const res = await myApi.get(`users/${userId}/posts/comments`);
        if (res.status === 200 && res.data.data.length > 0) {
            const authorName = res.data.data[0].username;
            posts = res.data.data[0].posts.map( post => {
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
        };
    } catch (error) {
        console.log(error.response);
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
        const res = await myApi.get('/users/posts/comments');
        if (res.status === 200) {
            res.data.data.forEach( user => {
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
        console.log(error.response);
        posts = [];
    }

    dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts
    });
};

const createPost = (currentUser, post) => async dispatch => {
    let posts = [];
    try {
        const res = await myApi.post(`/posts`, post, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
        if (res.status === 201) {
            
        };
    } catch (error) {
        console.log(error.response)
    } finally {
        const res = await myApi.get(`users/${currentUser._id}/posts/comments`);
        if (res.status === 200 && res.data.data.length > 0) {
            const authorName = res.data.data[0].username;
            posts = res.data.data[0].posts.map( post => {
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
        };
    }

    dispatch({
        type: CREATE_POST,
        payload: posts
    })
};

export {
    fetchAllPosts,
    fetchMyPosts,
    createPost
}