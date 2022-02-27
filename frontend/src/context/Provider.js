import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
	const [tokenLogin, settokenLogin] = useState(0);
	const [getCrypto, setgetCrypto] = useState('');
	const [loading, setloading] = useState(true);
	const [erro, seterro] = useState(false);


	const states = {
		tokenLogin,
		getCrypto,
		loading,
		erro,
		setloading,
		setgetCrypto,
		settokenLogin,
		seterro,
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
