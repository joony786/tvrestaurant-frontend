import axios from 'axios';

const host =
  process.env.NODE_ENV === 'development'
    ? '/'
    : process.env.APP_API_HOST || '/';

const apiClient = axios.create({
  baseURL: host,
  withCredentials: true,
});

export default apiClient;
