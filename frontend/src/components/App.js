import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import '../App.css';
import Header from './header';
import AllPosts from './allPosts';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/posts';


class App extends Component {
    componentDidMount(){
        // console.log(this.props.getAll())
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    
                    <Header/>
                    
                    <Route exact path="/" render={() => (
                        <section className="posts-holder">
                            <AllPosts></AllPosts>
                        </section>
                    )} />
                    
                    <Route exact path="/detail" render={() => (
                        <section className="post-detail">
                            <h1>Details</h1>
                        </section>
                    )} />
                    
                    <Route exact path="/add-post" render={() => (
                        <section className="post-add">
                            <h1>Add</h1>
                        </section>
                    )} />


                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => (state);


function mapDispatchToProps(dispatch) {
  return {
    getAll: () => dispatch(loadPosts()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
