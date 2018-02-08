const url 	  = 'http://localhost:3001';
const headers = { 'Authorization': 123456 };

const getAllPosts = () => fetch(`${url}/posts`, { headers }).then(res => res.json());

export const api={
	getAllPosts
};