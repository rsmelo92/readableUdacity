import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PostItem from './postItem';
import { connect } from 'react-redux';
import { loadPosts, loadCategories, loadPostsCategory } from '../actions/posts';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

class AllPosts extends Component{
	componentDidMount(){
		const category = this.props.location.pathname.split('/')[1];
		if (category) {
			this.props.getPostsCategory(category);	
		}
		else{
			this.props.getAll();	
		}
		this.props.getCategories();
	}
	componentWillReceiveProps(newProps){
		const category = this.props.location.pathname.split('/')[1],
			  newCat   = newProps.location.pathname.split('/')[1];
		if (category !== newCat) {
			window.location.reload();
		}
	}
	render(){
        const posts 	 = this.props.posts ? this.props.posts : [];
        const categories = this.props.categories ? this.props.categories.categories : [];
		return (
			<div className="posts-holder">
				<div>
					<Toolbar>
						<ToolbarGroup firstChild={true}>
							<ToolbarTitle text="Categories" />
						</ToolbarGroup>

						<ToolbarGroup>

                        	<Link to="/">All /</Link>
							
							{categories.map((item, index)=>(
                       			<Link key={index} to={`/${ item.path }`}> {item.name} /</Link>
							))}		

						</ToolbarGroup>

					</Toolbar>
				</div>
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

const mapStateToProps = (state) => ({
	posts:state.getPosts.posts,
	categories: state.categories.categories
});


function mapDispatchToProps(dispatch) {
	return {
		getAll: () => dispatch(loadPosts()),
		getCategories: () => dispatch(loadCategories()),
		getPostsCategory: (category) => dispatch(loadPostsCategory(category)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);