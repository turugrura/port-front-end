import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const middlewares = [
    logger,
    reduxThunk
];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;