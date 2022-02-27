import axios from 'axios';

export async function postLogin(email, password) {
  try {
    const url = "http://localhost:4000/api/login";
    const response = await axios.post(url, {
      email,
      password
    })
    const token = response.data.token;
    console.log(token);
    getCrypto(token);
  } catch (error) {
    console.log(error)
  }
}

export async function getCrypto(token) {
  try {
    console.log(token);
    const url = "http://localhost:4000/api/cryto/btc";
    const tokenLogin = token
    const crypto = await axios.get(url, {
      headers: {
        Authorization: tokenLogin,
      }
    })
    console.log(token, crypto)
  } catch (error) {
    console.log(error)
  }
}

export async function postCrypto(currecy, value, token) {
  try {
    console.log(token);
    const url = "http://localhost:4000/api/cryto/btc";
    const tokenLogin = token
    const body = {
      currecy, value
    }
    const crypto = await axios.post(url, body, {
      headers: {
        Authorization: tokenLogin,
      }
    })
     console.log(token, crypto)
  } catch (error) {
    console.log(error)
  }
}
