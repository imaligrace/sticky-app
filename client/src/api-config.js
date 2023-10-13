import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:9000/api/v1/buyers',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
