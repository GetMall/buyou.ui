import axios from "axios";

const api = axios.create({
  baseURL: "https://65120accb8c6ce52b395455f.mockapi.io/users",
});

export default api;