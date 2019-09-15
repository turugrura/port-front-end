import myApi from '../../api/port-back-end';
import {
    CREATE_COMMENT
} from './actionTypes';

const createComment = (currentUser, postId, newComment, fromPage = '/') => async dispatch => {
    let posts = [];
    try {
        await myApi.post(`/posts/${postId}/comments`, newComment, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    } catch (error) {
        console.log(error.response);
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
        type: CREATE_COMMENT,
        payload: posts
    })
};

export {
    createComment
}