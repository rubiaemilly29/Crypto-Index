import axios from 'axios';

export async function postLogin(email, password) {
	try {
		const url = 'http://localhost:4000/api/login';
		const response = await axios.post(url, {
			email,
			password
		});
		return response.data.token;
	} catch (error) {
		console.log(error.response.data);
		throw error.response.data.message;
	}
}

export async function getCrypto(token) {
	try {
		const url = 'http://localhost:4000/api/cryto/btc';
		const tokenLogin = token;
		const crypto = await axios.get(url, {
			headers: {
				Authorization: tokenLogin,
			}
		});
		return crypto.data;
	} catch (error) {
		throw error.response.data.message;
	}
}

export async function postCrypto(currecy, value, token) {
	try {
		console.log(token);
		const url = 'http://localhost:4000/api/cryto/btc';
		const tokenLogin = token;
		const body = {
			currecy, value
		};
		const crypto = await axios.post(url, body, {
			headers: {
				Authorization: tokenLogin,
			}
		});
		console.log(token, crypto);
	} catch (error) {
		throw error.response.data.message;
	}
}
