import axios from "axios";

const ip = {
  local: "localhost",
  debian: "192.168.0.195",
  ec2: "54.81.125.69"
}

const api = axios.create({
  baseURL: `http://${ip.local}:8080/api`,
  timeout: 50000,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    const tokenLoja = sessionStorage.getItem('tokenLoja');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (tokenLoja) {
      config.headers.Authorization = `Bearer ${tokenLoja}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;