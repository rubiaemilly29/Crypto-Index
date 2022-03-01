import '../css/error.css';
import React, { useContext } from 'react';
import Context from '../context/Context';




export default function Error(prop) {
	let {
		seterro,
	} = useContext(Context);

	return (
		<div id="popup1" className='overlay' >
			<div className="popup">
				<h2>Houve um Erro!</h2>
				<button className="close" onClick={() => seterro(false)}>x</ button>
				<div className="content">
					{prop.props}
				</div>
			</div>
		</div>
	);
}
