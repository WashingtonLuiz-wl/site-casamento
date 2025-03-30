import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://site-casamento-92c66-default-rtdb.firebaseio.com/',
});

export default api;
