import React, { Component } from 'react';
import PostItem from './postItem';
import { api } from '../utils/api';

class AllPosts extends Component{
	componentDidMount(){
		api.getAllPosts().then(res=>{
			this.setState({
							posts:res
						  });
		});
	}

	render(){
		const posts = this.state ? this.state.posts : [];
		return (
			<div>
				{posts.map((item, index)=>(
					<PostItem 
						key={index} 
						className="post"
						post={item}
					></PostItem>
				))}
			</div>
            
		)
	}
}

export default AllPosts;