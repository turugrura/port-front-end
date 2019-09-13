import {
    SIGN_IN,
    SIGN_UP
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
        default:
            return state;
    }
};