
const getPosts = (state={}, action)=>{
    switch (action.type){
        case 'GET_ALL':
            state = {...state, posts:action.payload}
            return state;
        default:
            return state;
    }
}

const getCategories = (state={}, action)=>{
    switch (action.type){
        case 'GET_CATEGORIES':
            state = {...state, categories:action.payload}
            return state;
        default:
            return state;
    }
}

const voteReducer = (state={}, action) =>{
	switch (action.type){
		case 'VOTE_UP':
			state = {...state, posts:action.payload}; 
			return state;
		case 'VOTE_DOWN':
			state = {...state, posts:action.payload}; 
			return state;
		default:
			return state;
	}
}

export default {
					getPosts,
					getCategories,
					voteReducer
				};