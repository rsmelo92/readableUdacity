import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class PostItem extends Component{	
	handleVote = ()=>{
		alert("Voted");
	}
	render(){
		const post = this.props.post;
		console.log("post: ",post);
		return (
			<Card className="post-card">
				<CardHeader
					title={post.title}
					subtitle={post.author}
					actAsExpander={false}
					showExpandableButton={true}
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
					<FlatButton className="vote-button up" style={{padding:6}} onClick={()=>this.handleVote()}>
						<FontIcon className="material-icons" style={{color:'blue'}}>thumb_up</FontIcon>
					</FlatButton>
					<FlatButton className="vote-button down" style={{padding:6}} onClick={()=>this.handleVote()}>
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

export default PostItem;