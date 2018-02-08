import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class PostItem extends Component{
	render(){
		return (
			<Card className="post-card">
				<CardHeader
					title="Title"
					subtitle="Author"
					actAsExpander={false}
					showExpandableButton={true}
				/>
				<CardText>
					<strong>
					<div>
						<span className="comments-number">13</span>
						<span> comments</span>
					</div>
					<div>
						<span className="points-number">100</span>
						<span> points</span>
					</div>
					</strong>
				</CardText>
				<CardActions>
					<FlatButton className="vote-button up" style={{padding:6}}>
						<FontIcon className="material-icons" style={{color:'blue'}}>thumb_up</FontIcon>
					</FlatButton>
					<FlatButton className="vote-button down" style={{padding:6}}>
						<FontIcon className="material-icons" style={{color:'blue'}}>thumb_down</FontIcon>
					</FlatButton>
					<FlatButton style={{padding:6}} className="vote-button" label="Edit"/>
					<FlatButton className="vote-button" label="Delete"/>
				</CardActions>
				<CardText expandable={true}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</CardText>
			</Card>
		)
	}
}

export default PostItem;