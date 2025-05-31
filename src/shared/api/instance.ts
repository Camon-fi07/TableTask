import axios from 'axios';

import { errorInterceptor } from './interceptors/errorInterceptor';

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use(undefined, errorInterceptor);
