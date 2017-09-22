import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

export default createStore(rootReducer, applyMiddleware(logger));