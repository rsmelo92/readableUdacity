import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import '../App.css';
import Header from './header';
import AllPosts from './allPosts';

class App extends Component {
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

export default App;