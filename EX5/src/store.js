import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { logInSaga } from './sagas'


const sagaMiddleware = createSagaMiddleware();

const store =  createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(logInSaga);

export default store;
