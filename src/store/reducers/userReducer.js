import {
    GET_ALL_USER,
    UPDATE_USER_BY_ADMIN
} from '../actions/actionTypes';

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_USER:
        case UPDATE_USER_BY_ADMIN:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}