import store from '../store';

const getPosts = (state={}, action)=>{
    switch (action.type){
        case 'GET_ALL':
            state = {...state, posts:action.payload}
            return state;
        default:
            return state;
    }
}

const voteReducer = (state={}, action) =>{
	switch (action.type){
		case 'VOTE_UP':
			state = store.getState().getPosts.posts.map(item=>{
				if (item.id === action.payload.id) {
					return action.payload;
				}
				return item;
			});
			return state;
		case 'VOTE_DOWN':
			state = store.getState().getPosts.posts.map(item=>{
				if (item.id === action.payload.id) {
					return action.payload;
				}
				return item;
			});
			return state;
		default:
			return state;
	}
}

export default {
					getPosts,
					voteReducer
				};