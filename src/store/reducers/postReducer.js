import {
    FETCH_MY_POSTS,
    FETCH_ALL_POSTS,
    CREATE_POST,
    UPDATE_POST,
    UPDATE_POST_LIKE,
    DELETE_POST,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from '../actions/actionTypes';

const INITIAL_STATE = {
    posts: [],
    error: null
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
        case CREATE_POST:
        case UPDATE_POST:
        case UPDATE_POST_LIKE:
        case DELETE_POST:
        case CREATE_COMMENT:
        case UPDATE_COMMENT:
        case DELETE_COMMENT:
                return {
                    ...state,
                    posts: action.payload
                };
        default:
            return state;
    }
}