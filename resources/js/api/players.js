import axios from './axios';

export default {
  fetchAll() {
    return axios.get('/players');
  },
  fetchOne(id) {
    return axios.get(`/players/${id}`);
  },
  create(player) {
    return axios.post('/players', player);
  },
  patch(player) {
    return axios.patch(`/players/${player.id}`, player);
  }
};
