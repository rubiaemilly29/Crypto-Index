import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Crypto from './page/Crypto';
import Login from './page/Login';
import PriceChange from './page/PriceChange';

function App() {

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path="/login" element={ <Login /> } />
					<Route exact path="/price_change" element={ <PriceChange /> } />
					<Route exact path="/" element={ <Crypto /> } />
					<Route path="*" element={ <Navigate replace  to = "/"  />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
