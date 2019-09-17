import {
    FETCH_TODO,
    FETCH_TODOS,
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../actions/actionTypes';

const INITIAL_STATE = {
    todos: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                todos: action.payload
            };
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case CREATE_TODO:
        case UPDATE_TODO:
        case DELETE_TODO:
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
};