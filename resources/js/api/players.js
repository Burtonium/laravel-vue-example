import axios from './axios';

export default {
  fetch() {
    return axios.get('/players');
  },
  fetchOne(id) {
    return axios.get(`/players/${id}`);
  },
};
