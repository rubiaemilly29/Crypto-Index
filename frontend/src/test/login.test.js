import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import Login from '../page/Login';
import renderWithRouter from './renderWithRouter';

describe('Login', () => { 
	
	it('Quando, na página Login , e passado o email e o password certos', async () => {
		const { container, getByText, history, getByLabelText } = renderWithRouter(<Login />);
		expect(getByText(/Email address/i)).toBeInTheDocument();
		expect(getByText(/Password/i)).toBeInTheDocument();
		fireEvent.change(getByLabelText(/Email address/i), { target: { value: 'email' } });
		fireEvent.change(getByLabelText(/Password/i), {target: {value: '1234567'}});
		fireEvent.click(getByText(/Submit/i));
		await waitFor(() => expect(getByText(/Houve um Erro!/i)).toBeInTheDocument());
	});
	  
	it('Quando, na página Login , e passado o email e o password certos', async() => {
		const { container, getByText, history, getByLabelText } = renderWithRouter(<Login />);
		history.push('/login');
		const { pathname } = history.location;
		expect(pathname).toBe('/login');
		expect(getByText(/Email address/i)).toBeInTheDocument();
		expect(getByText(/Password/i)).toBeInTheDocument();
		fireEvent.change(getByLabelText(/Email address/i), { target: { value: 'email@email.com' } });
		fireEvent.change(getByLabelText(/Password/i), {target: {value: '1234567'}});
		fireEvent.click(getByText(/Submit/i));
		expect(container.querySelector('.lds-roller')).toBeInTheDocument();
	});
	
});