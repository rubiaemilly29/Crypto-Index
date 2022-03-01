import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CryptoCard(prop) {
	const coin = prop.coin;
	const number = prop.multipliednumber.rate_float;

	return (
		<Card>
			<Card.Header>
				<Card.Title>{coin.code}</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Text>
						${(coin.rate_float*number).toFixed(2)}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
