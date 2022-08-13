import axios from "axios";

const api = axios.create({
  // IP for development only.
  baseURL: "http://192.168.0.10:8080",
});

export default api;
