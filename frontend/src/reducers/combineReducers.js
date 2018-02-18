import { combineReducers } from 'redux';
import postReducers from './postReducers';

const RootReducer = combineReducers({
	postReducers
});

export default RootReducer;