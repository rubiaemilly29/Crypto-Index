import React , { useContext, useEffect, useState }  from 'react';
import  { Navigate, useNavigate }  from  'react-router-dom' ; 
import CryptoCard from '../component/cryptoCard';
import Loading from '../component/Loading';
import Context from '../context/Context';
import Error from '../component/Error';
import { getCrypto } from '../service/service';
import { CardGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';


export default function Crypto() {
	const [currencyComparison, setcurrencyComparison] = useState([]);
	const [bitcoin, setbitcoin] = useState('');
	const history = useNavigate();


	let {
		loading,
		erro,
		messageError,
		setloading,
		seterro,
		setmessageError,
	} = useContext(Context);

	const tokenLocal = JSON.parse(localStorage.getItem('token'));
	
	useEffect(() => {
		setloading(true);
		const o = async () => {
			if (tokenLocal) {
				await fecthGetCrypto(tokenLocal);
			}
		};
		o();
	}, []);

	const fecthGetCrypto = async (token) => {
		try {

			const currencyComparison = await getCrypto(token);
			const { USD, BTC, BRL, EUR, CAD } = currencyComparison.bpi;
			setcurrencyComparison([USD, BRL, EUR, CAD]);
			setbitcoin(BTC);
			setloading(false);
		} catch (error) {
			setmessageError(error);
			seterro(true);
		}
	};
	
	return !tokenLocal ? <Navigate replace  to = "/login"  /> : (
		loading ? <Loading /> :
			<div data-testid="crypto">

				<Button
					variant="primary"
					type="button"
					onClick={() => history({ pathname: '/price_change' }) }>
					Atualizar valor monetario
				</Button>
				<Card>
					<Card.Header>
						<Card.Title>{bitcoin.code}</Card.Title>
					</Card.Header>
					<Card.Body>
						<input
							placeholder={bitcoin.rate_float}
							onKeyPress={(e) => {
								const bit = bitcoin.rate_float = parseInt(e.target.value);
								e.key === 'Enter' ? setbitcoin({ ...bitcoin, bit}) : '';
							}}
						/>
					</Card.Body>
				</Card>
				<CardGroup>
					{currencyComparison.map((element) => (
						<CryptoCard coin={element} multipliednumber={ bitcoin }key={element.code} />
					))}
				</CardGroup>
				{erro ? <Error props={messageError}/> : ''}
			</div>
	);
}
