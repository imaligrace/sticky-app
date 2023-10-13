import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://stickynote-app.onrender.com/api/v1/buyers',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
