import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Header = ()=>(
	<header className="App-header">
        <nav>
            <div className="logo-holder">
	            <Link to="/">
	                <img src={logo} className="App-logo" alt="logo" />
	                <span className="App-title">ReactReadables</span>  
	            </Link>              
            </div>
            <div className="other-holder">
	            <Link to="/add-post">
	                <RaisedButton label="Add Post" secondary={true} />
	            </Link>
            </div>
        </nav>
    </header>
)

export default Header;