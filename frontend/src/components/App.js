import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import '../App.css';
import Header from './header';
import AllPosts from './allPosts';
import AddPost from './addPost';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    
                    <Header/>
                    
                    <Route exact path="/" component={AllPosts} />

                    <Route exact path="/:category" component={AllPosts} />

                    
                    <Route exact path="/detail" render={() => (
                        <section className="post-detail">
                            <h1>Details</h1>
                        </section>
                    )} />
                    
                    <Route exact path="/add-post" render={() => (
                        <AddPost />
                    )} />


                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;