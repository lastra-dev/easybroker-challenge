import axios from "axios";

/**
 *  Creates http Client for server API.
 */
const api = axios.create({
  // This only works for development.
  //
  // in production you need to specify a secure https API baseURL.
  baseURL: `http://localhost:8080`,
});

export default api;
