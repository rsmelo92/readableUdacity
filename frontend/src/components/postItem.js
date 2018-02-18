import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { votePost } from '../actions/posts';

class PostItem extends Component{	
	componentDidMount(){
	}
	handleVote = (id, type)=>{
		this.props.votePost(id, type);
		console.log('props', this.props);

	}
	render(){
		const post = this.props.post;
		return (
			<Card className="post-card">
			
				<CardHeader
					title 				 = {post.title}
					subtitle 			 = {post.author}
					actAsExpander 		 = {false}
					showExpandableButton = {true}
				/>
			
				<CardText>
					<strong>
					<div>
						<span className="comments-number">{post.commentCount}</span>
						<span> comments</span>
					</div>
					<div>
						<span className="points-number">{post.voteScore}</span>
						<span> points</span>
					</div>
					</strong>
				</CardText>
			
				<CardActions>
					<FlatButton className="vote-button up" style={{padding:6}} onClick={()=>this.handleVote(post.id, 'upVote')}>
						<FontIcon className="material-icons" style={{color:'blue'}}>thumb_up</FontIcon>
					</FlatButton>
			
					<FlatButton className="vote-button down" style={{padding:6}} onClick={()=>this.handleVote(post.id, 'downVote')}>
						<FontIcon className="material-icons" style={{color:'blue'}}>thumb_down</FontIcon>
					</FlatButton>
			
					<FlatButton style={{padding:6}} className="vote-button" label="Edit"/>
			
					<FlatButton className="vote-button" label="Delete"/>
				</CardActions>

				<CardText expandable={true}>
					{post.body}
				</CardText>
			
			</Card>
		)
	}
}

const mapStateToProps = (state) => (state);

function mapDispatchToProps(dispatch) {
	return {
		votePost: (id, option) => dispatch(votePost(id, option)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);