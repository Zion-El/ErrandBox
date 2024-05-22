// src/axiosInstance.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://errandbox-api.onrender.com/api', // Replace with your API base URL
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
