import axios from 'axios';

const API_BASE_URL = 'http://localhost:2000';

export const signUp = async (userData) => {
  return await axios.post(`${API_BASE_URL}/user/signup`, userData);
};

export const login = async (credentials, isAdmin = false) => {
  const url = isAdmin ? `${API_BASE_URL}/admin/login` : `${API_BASE_URL}/user/login`;
  return await axios.post(url, credentials);
};