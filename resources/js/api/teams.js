import axios from './axios';

export default {
  fetch() {
    return axios.get('/teams');
  },
  fetchOne(id) {
    return axios.get(`/teams/${id}`);
  },
};
