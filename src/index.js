import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, /*push*/ } from 'react-router-redux';
import reduxThunk from 'redux-thunk'

import './index.css';

import reducers from './reducers/';

import HomePage from './components/HomePage/HomePage.js';

// Create browser history
const history = createHistory();

// Building the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history);

// Redux middlewares
const reduxMiddleware = applyMiddleware(
	routeMiddleware,
	reduxThunk
)

// create store
const store = createStore(
	combineReducers({
		reducers,
		router: routerReducer
	}),
	reduxMiddleware
)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div id="router-wrapper">
				<Route exact path="/" component={HomePage} />
			</div>
		</ConnectedRouter>
	</Provider>
, document.getElementById('root'))