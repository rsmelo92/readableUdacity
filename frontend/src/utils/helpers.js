import Axios from 'axios'

const url 	  = 'http://localhost:3001';
const headers = { 'Authorization': 123456 };

const getAllPosts = () => fetch(`${url}/posts`, { headers }).then(res => res.json());

const getCategories = (id, option) => {
    return Axios.get(url + '/categories/', { headers }).then(res => res.data);
}

const getPostsCategories = (category)=>{
	console.log("category", category)
	return Axios.get(url + '/' + category + '/posts', { headers }).then(res => res.data );
}

const addPostToServer = (post) =>{
	console.log("Post server", post);
    return Axios.post(url + '/posts/', { post }, { headers }).then(res => res.data);
}

const vote = (id, option) => {
    return Axios.post(url + '/posts/' + id, { option: `${option}` }, { headers }).then(res => res.data);
}

export const api = {
	getAllPosts,
	getCategories,
	getPostsCategories,
	addPostToServer,
	vote
};