const getPosts = (state={}, action)=>{
    switch (action.type){
        case 'GET_ALL':
            console.log("GET_ALL");
            state = {...state, posts:action.payload}
            return state;
        default:
            return state;
    }
}

export default getPosts;