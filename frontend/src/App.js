import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Crypto from './page/Crypto';
import Login from './page/Login';
import NotFound from './page/NotFound';
import PriceChange from './page/PriceChange';

function App() {

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path="/" element={ <Login /> } />
					<Route exact path="/PriceChange" element={ <PriceChange /> } />
					<Route exact path="/Crypto" element={ <Crypto /> } />
					<Route path="*" element={ <NotFound /> } />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
