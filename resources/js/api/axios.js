import axios from 'axios';
import store from '@/js/store/index';

const instance = axios.create({
  baseURL: '/api/v1',
  validateStatus(status) {
    return status >= 200 && status < 500;
  },
  xsrfCookieName: 'CSRF-TOKEN',
  xsrfHeaderName: 'x-csrf-token',
  withCredentials: true,
});

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]');
instance.interceptors.request.use((config) => {
  Object.assign(config.headers, { 'x-csrf-token': token.content });
  return config;
});

instance.interceptors.request.use((config) => {
  const { auth } = store.state;
  if (auth.logged) {
    Object.assign(config.headers, { 'AUTHORIZATION': `Bearer ${auth.token}` });
  }
  return config;
});

export default instance;
