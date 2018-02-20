import { combineReducers } from 'redux';
import postReducers from './postReducers';

const RootReducer = combineReducers({
	getPosts: 		postReducers.getPosts,
	voteReducer: 	postReducers.voteReducer,
	// postsCategory: 	postReducers.getPostsCategory,
	categories: 	postReducers.getCategories,
});

export default RootReducer;