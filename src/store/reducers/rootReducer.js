import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postReducer from './postReducer';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

export default combineReducers({
    postReducer,
    todoReducer,
    authReducer,
    userReducer
});