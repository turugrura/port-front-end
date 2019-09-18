import {
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT,
    SET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    CLEAR_CURRENT_USER
} from '../actions/actionTypes';

const INITIAL_STATE = {
    currentUser: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                currentUser: action.payload
            };
        case SIGN_UP:
            return {
                ...state,
                currentUser: action.payload
            };
        case SIGN_OUT:
            return {
                ...state,
                currentUser: action.payload
            };
        case SET_CURRENT_USER:
        case UPDATE_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case CLEAR_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};