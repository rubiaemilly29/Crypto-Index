import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Crypto from './page/Crypto';
import Login from './page/Login';
import NotFound from './page/NotFound';
import PriceChange from './page/PriceChange';
import {postLogin} from './service/service';

function App() {
	useEffect(() => {
		return async () => {
			const login =  postLogin('rubia@gmail.com', '123456');
			console.log(login);
		};
	}, []);
 
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" component={ Login } />
					<Route exact path="/product-details/:id" component={ PriceChange } />
					<Route exact path="/shopping-cart" component={ Crypto } />
					<Route path="*" component={ NotFound } />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
