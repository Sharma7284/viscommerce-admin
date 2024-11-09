import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://gandivam.co.in/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(`token`);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.statu === 401) {
      console.log(`Unauthorized access`);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
