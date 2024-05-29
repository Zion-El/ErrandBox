// src/axiosInstance.ts
import axios from 'axios';

const endpoint = import.meta.env.VITE_STAGING_ENDPOINT
const API = axios.create({
  baseURL: endpoint, 
    maxBodyLength: Infinity,
    maxContentLength: Infinity,
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
  // headers: {
  //   
  // },
});

export default API;
