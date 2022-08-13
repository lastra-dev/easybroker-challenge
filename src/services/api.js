import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.stagingeb.com/v1/",
  headers: { 'x-authorization': 'l7u502p8v46ba3ppgvj5y2aad50lb9' }
});

export default api;
