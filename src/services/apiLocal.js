import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'http://192.168.0.110:4000/api',
});

export default apiLocal;
