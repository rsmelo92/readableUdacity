import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import RootReducer from './reducers/combineReducers';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
	testReducer:''
}

const store = createStore(
	RootReducer, 
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
    		<App />
  		</Provider>
  	</BrowserRouter>, 
  	document.getElementById('root')
);

registerServiceWorker();