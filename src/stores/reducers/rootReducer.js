import { combineReducers } from 'redux';

import postReducer from './postReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    postReducer,
    todoReducer
});