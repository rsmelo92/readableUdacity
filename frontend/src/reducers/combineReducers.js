import { combineReducers } from 'redux';
import postReducers from './postReducers';

const RootReducer = combineReducers({
	getPosts: 		postReducers.getPosts,
	voteReducer: 	postReducers.voteReducer
});

export default RootReducer;