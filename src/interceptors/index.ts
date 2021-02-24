import axios from 'axios';
import { useCookie } from '@/utils/StorageUtil';
import { useNavigate } from 'react-router';


axios.defaults.baseURL = process.env.REACT_APP_API;

axios.interceptors.request.use(async request => {
  const token: string = await useCookie.getItem('authentication');

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${  token}`,
    };
  }

  return request;
});

axios.interceptors.response.use(
  response => response.data,
  error => {
    // 504 still allow offline mode to run the API's
    if (error.response.status !== 504) {
      const navigation = useNavigate();
      navigation(`/error/${  error.response.status.toString()}`);
    }

    return Promise.reject(error.response.data);
  },
);

export default axios;
