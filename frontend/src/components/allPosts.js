import React, { Component } from 'react';
import PostItem from './postItem';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/posts';

class AllPosts extends Component{
	componentDidMount(){
		this.props.getAll();
	}

	render(){
        const posts = this.props.posts ? this.props.posts : [];
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

const mapStateToProps = (state) => ({posts:state.postReducers.posts});


function mapDispatchToProps(dispatch) {
  return {
    getAll: () => dispatch(loadPosts()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);