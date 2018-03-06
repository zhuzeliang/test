import React from 'react';
import ReactDOM from 'react-dom';
import { Route , BrowserRouter, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import './config/rem.js';
import registerServiceWorker from './registerServiceWorker';
import {store} from './redux/store/store';
import  './style/common.scss';
import Home from './page/home/';
import Welcome from './page/welcome/';
import Login from './page/login/';
import Store from './page/store/';
import User from './page/user/';
import CheckAuth from './page/checkAuth/';
import Error from './page/error';

const routes = [
				{ path: '/', component: Home, exact: true },
				{ path: '/login', component: Login },
				{ path: '/welcome', component: Welcome },
				{ path: '/store', component: Store },
				{ path: '/user', component: User }
			]



ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
	        <div className="router-page">
	        	<CheckAuth></CheckAuth>
	   			<Switch>
			        {
			        	routes.map(route => (
			        		<Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
			        	))
			        }
			        <Route path="*" component={ Error } />
			    </Switch>
	        </div>
	    </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
