import axios from "axios";

const ip = {
  local: import.meta.env.VITE_LOCAL_IP,
  prod: import.meta.env.VITE_PROD_IP,
}

const api = axios.create({
  baseURL: `${ip.prod}`,
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