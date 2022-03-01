import React from 'react';
import  { useNavigate }  from  'react-router-dom' ; 
import { Button } from 'react-bootstrap';


				
export default function PriceChange() {
	const history = useNavigate();

	return (
		<Button

			variant="primary"

			type="button"

			onClick={() => history({ pathname: '/' }) }>

					Atualizar valor monetario

		</Button>

	);
}
