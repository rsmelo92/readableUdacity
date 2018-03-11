import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import serializeForm from 'form-serialize';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { addPostToServer } from '../actions/posts';

class AddPost extends Component{
	handleSubmit = (e)=>{
		e.preventDefault();
		const values = serializeForm(e.target,{hash:true});
		values['category'] = this.state.value;
		console.log("valies", values)
		this.props.insertPost(values);
		alert("Post Inserted with success!");
		window.location.assign("/");
	}
	state = {
		value: 1,
	};

	handleChange = (event, index, value) => this.setState({value});
	render(){
		return (
			<section className="post-add" style={{background:'white', height:'100vh'}}>
                <h1 style={{textAlign:'center', margin:0, padding:20}}>Add New Post</h1>
                <form onSubmit={this.handleSubmit} style={{textAlign:'center', margin:'auto', maxWidth:300}}>
                	<TextField
			          id="postTitle"
			          hintText="Title"
			          name="title"
			        />
                	<TextField
			          id="postContent"
			          hintText="Post"
			          name="body"
			        />
                	<TextField
			          id="postAuthor"
			          hintText="Author"
			          name="author"
			        />
					<SelectField
						floatingLabelText="Category"
						value={this.state.value}
						onChange={this.handleChange}
						name="category"
						style={{textAlign:'left',marginBottom:15}}
					>
						<MenuItem value='react' primaryText="react" />
						<MenuItem value='redux' primaryText="redux" />
						<MenuItem value='udacity' primaryText="udacity" />

					</SelectField>
					<button type="submit">Submit!</button>
                </form>
            </section>
		)
	}
}

const mapStateToProps = (state) => ({
	newPost:state.newPost
});


function mapDispatchToProps(dispatch) {
	return {
		insertPost: (post) => dispatch(addPostToServer(post)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);