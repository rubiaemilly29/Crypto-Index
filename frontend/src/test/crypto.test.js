import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import Crypto from '../page/Crypto';
import renderWithRouter from './renderWithRouter';

// Referecia https://javascript.plainenglish.io/testing-local-storage-with-testing-library-580f74e8805b

describe('Crypto', () => { 
	afterEach(() => {
		window.localStorage.clear();
	});
  
	it('página Crypto é renderizada /', async() => {
		window.localStorage.setItem('token', JSON.stringify('hfrejgdhjkhgsdfg'));
		const { getByText } = renderWithRouter(<Crypto />);
		window.localStorage.getItem('token');
		await waitFor(() => expect(getByText(/BTC/i)).toBeInTheDocument());
		expect(getByText(/Atualizar valor monetario/i)).toBeInTheDocument();
		expect(getByText(/USD/i)).toHaveTextContent('USD');
		expect(getByText(/BRL/i)).toHaveTextContent('BRL');
		expect(getByText(/EUR/i)).toHaveTextContent('EUR');
		expect(getByText(/CAD/i)).toHaveTextContent('CAD');
	});
});