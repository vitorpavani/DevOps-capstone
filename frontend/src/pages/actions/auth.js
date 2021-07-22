import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL || '';

const login = async (email, password) => {
  console.log(email, password);
  console.log(api_url);
  try {
    const response = await axios.post(`${api_url}/api/auth`, {
      email,
      password,
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export { login };
