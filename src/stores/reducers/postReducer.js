import {
    FETCH_MY_POSTS,
    FETCH_ALL_POSTS
} from '../actions/actionTypes';

const INITIAL_STATE = {
    posts: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MY_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case FETCH_ALL_POSTS:
                return {
                    ...state,
                    posts: action.payload
                };
        default:
            return state;
    }
}