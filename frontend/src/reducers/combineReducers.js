import { combineReducers } from 'redux';
import testReducer from './index';

const RootReducer = combineReducers({
	testReducer:testReducer
});

export default RootReducer;