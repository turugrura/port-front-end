import {
    GET_ALL_USER
} from '../actions/actionTypes';

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_USER:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}