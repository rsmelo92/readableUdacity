import React, { Component } from 'react';
import PostItem from './postItem';
import { connect } from 'react-redux';
import { loadPosts, loadCategories, loadPostsCategory } from '../actions/posts';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

class AllPosts extends Component{
	componentDidMount(){
		this.props.getAll();
		this.props.getCategories();
	}
	handleCategoryClick(category){
		this.props.getPostsCategory(category);
	}
	render(){
        const posts = this.props.posts ? this.props.posts : [];
        const categories = this.props.categories ? this.props.categories.categories : [];
        console.log("props", this.props)
		return (
			<div>
				<div>
					<Toolbar>
						<ToolbarGroup firstChild={true}>
							<ToolbarTitle text="Categories" />
						</ToolbarGroup>

						<ToolbarGroup>
							{categories.map((item, index)=>(
								<span key={item.name + index}>
									<a key={item.path} onClick={()=>{this.handleCategoryClick(item.path)}}> {item.path} </a>
									<span key={index}> / </span>
								</span>
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
		getPostsCategory: () => dispatch(loadPostsCategory()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);