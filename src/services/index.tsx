import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokedex-back-production.up.railway.app',
});

export default api;
