import myApi from '../../api/port-back-end';
import {
    FETCH_MY_POSTS,
    FETCH_ALL_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST
} from './actionTypes';

const fetchMyPosts = (userId) => async dispatch => {
    let posts = [];
    try {
        const res = await myApi.get(`users/${userId}/posts/comments`);
        if (res.status === 200 && res.data.data.length > 0) {
            const title = res.data.data[0].title;
            posts = res.data.data[0].posts.map( post => {
                // const comments = post.comments.map( cm => {
                //     return {
                //         ...cm
                //     };
                // });

                return {
                    ...post,
                    title
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
        const res = await myApi.get('/posts/comments');
        if (res.status === 200) {
            posts = res.data.data.map( post => {
                return {
                    ...post,
                    author: post.author._id,
                    title: post.author.title
                };
            });
        };
    } catch (error) {
        console.log(error.response);
        posts = [];
    }

    dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts
    });
};

const createPost = (currentUser, post, fromPage = '/') => async dispatch => {
    let posts = [];
    try {
        await myApi.post(`/posts`, post, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    } catch (error) {
        console.log(error.response)
    } finally {
        if (fromPage === '/') {
            const res = await myApi.get('/posts/comments');
            if (res.status === 200) {
                posts = res.data.data.map( post => {
                    return {
                        ...post,
                        author: post.author._id,
                        title: post.author.title
                    };
                });
            };
        } else {
            const res = await myApi.get(`/users/${currentUser._id}/posts/comments`);
            if (res.status === 200 && res.data.data.length > 0) {
                const title = res.data.data[0].title;
                posts = res.data.data[0].posts.map( post => {
                    return {
                        ...post,
                        title
                    };
                });
            };
        };
        
    }

    dispatch({
        type: CREATE_POST,
        payload: posts
    })
};

const updatePost = (currentUser, postId, post, fromPage = '/') => async dispatch => {
    let posts = [];
    try {
        await myApi.patch(`/posts/${postId}`, post, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    } catch (error) {
        console.log(error.response)
    } finally {
        if (fromPage === '/') {
            const res = await myApi.get('/posts/comments');
            if (res.status === 200) {
                posts = res.data.data.map( post => {
                    return {
                        ...post,
                        author: post.author._id,
                        title: post.author.title
                    };
                });
            };
        } else {
            const res = await myApi.get(`/users/${currentUser._id}/posts/comments`);
            if (res.status === 200 && res.data.data.length > 0) {
                const title = res.data.data[0].title;
                posts = res.data.data[0].posts.map( post => {
                    return {
                        ...post,
                        title
                    };
                });
            };
        };        
    };

    dispatch({
        type: UPDATE_POST,
        payload: posts
    })
};

const deletePost = (currentUser, postId, fromPage = '/') => async dispatch => {
    let posts = [];
    try {
        await myApi.delete(`/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    } catch (error) {
        console.log(error.response)
    } finally {
        if (fromPage === '/') {
            const res = await myApi.get('/posts/comments');
            if (res.status === 200) {
                posts = res.data.data.map( post => {
                    return {
                        ...post,
                        author: post.author._id,
                        title: post.author.title
                    };
                });
            };
        } else {
            const res = await myApi.get(`/users/${currentUser._id}/posts/comments`);
            if (res.status === 200 && res.data.data.length > 0) {
                const title = res.data.data[0].title;
                posts = res.data.data[0].posts.map( post => {
                    return {
                        ...post,
                        title
                    };
                });
            };
        };        
    };

    dispatch({
        type: DELETE_POST,
        payload: posts
    })
};

export {
    fetchAllPosts,
    fetchMyPosts,
    createPost,
    updatePost,
    deletePost
}