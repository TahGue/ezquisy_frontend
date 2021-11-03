import axios from 'axios';
import { url } from '../config/config';
const axiosInstance = axios.create({
  baseURL: `${url}`,
});

// Alter defaults after instance has been created
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem(
  'token'
)
  ? localStorage.getItem('token')
  : '';

export default axiosInstance;
