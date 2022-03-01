import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Loading from '../component/Loading';
import '../css/login.css';
import Context from '../context/Context';
import Error from '../component/Error';
import { postLogin } from '../service/service';
import { useNavigate, Navigate } from 'react-router-dom';


export default function Login() {
	const history = useNavigate();
	const [email, setemail] = useState('');
	const [pass, setpass] = useState('');

	const token = localStorage.getItem('token');

	let {
		loading,
		erro,
		messageError,
		setloading,
		seterro,
		setmessageError,
	} = useContext(Context);

	useEffect(() => {
		const e = async () => {
			setloading(false);
		};
		e();
	}, [erro]);

	const setToken = (token) => {
		localStorage.setItem('token', JSON.stringify(token));
	};
	
	const handleClick = async () => {
		try {
			setloading(true);
			const token = await postLogin(email, pass);
			setToken(token),
			setloading(false);
			history({ pathname: '/Crypto' });
		} catch (error) {
			console.log(error);
			setmessageError(error);
			seterro(true);
		}
			
	};


	return token ? <Navigate replace  to = "/"  /> : (
		loading ? <Loading /> :
			<>
				<Form
					style={{ width: '25rem' }} className=" center justify-content-center align-item-center">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={e => setemail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={pass}
							onChange={e => setpass(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
					</Form.Group>
					<Button
						variant="primary"
						type="button"
						onClick={() => handleClick()}>
					Submit
					</Button>
				</Form>
				{erro ? <Error props={messageError}/> : ''}
			</>
	);
}
