import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postReducer from './postReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    postReducer,
    todoReducer,
    authReducer
});