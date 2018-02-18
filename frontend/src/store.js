import { applyMiddleware, createStore } from 'redux';
import RootReducer from './reducers/combineReducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, logger);
const store 	 = createStore(RootReducer, middleware);

export default store;