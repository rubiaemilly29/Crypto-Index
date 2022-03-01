import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
	const [dataGetCrypto, setdataGetCrypto] = useState('');
	const [loading, setloading] = useState(true);
	const [erro, seterro] = useState(false);
	const [messageError, setmessageError] = useState('');



	const states = {
		dataGetCrypto,
		loading,
		erro,
		messageError,
		setloading,
		setdataGetCrypto,
		seterro,
		setmessageError,
	};

	return (
		<Context.Provider value={ states }>
			{children}
		</Context.Provider>
	);
}
Provider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};


export default Provider;
