import axios from 'axios';

export const API_ENDPOINT = 'http://localhost:8000/';

export default axios.create({
  baseURL: API_ENDPOINT,
});
