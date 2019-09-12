import {
    FETCH_TODO,
    FETCH_TODOS
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
        default:
            return state;
    }
};