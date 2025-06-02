// src/api/axiosConfig.ts
import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Change this

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config: any) => {
    // You can get token from async storage or secure storage here
    // add additional logic when custom headers are needed
    // const token = await getToken(); // mock function
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: unknown) => Promise.reject(error),
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    const originalRequest = error.config;

    // Optional: Token refresh logic if 401
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const newToken = await refreshAccessToken(); // implement this
      // Save new token to storage
      // Retry original request with new token
      // originalRequest.headers.Authorization = `Bearer ${newToken}`;
      // return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
