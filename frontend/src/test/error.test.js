import Error from '../component/Error';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';


describe('Login', () => {
	it('Quando, na página Login , e passado o email e o password certos', async () => {
		const { getByText, getByLabelText } = renderWithRouter(<Error />);
		expect(getByText(/Houve um Erro!/i)).toBeInTheDocument();
		expect(getByText(/x/i)).toBeInTheDocument();
		fireEvent.click(getByText(/x/i));
	});
});
