import axios from './axios';

export default {
  fetchAll() {
    return axios.get('/teams');
  },
  fetchOne(id) {
    return axios.get(`/teams/${id}`);
  },
  create(team) {
    return axios.post('/teams', team);
  },
  patch(team) {
    return axios.patch(`/teams/${team.id}`, team);
  },
  delete(id) {
    return axios.delete(`/teams/${id}`);
  }
};
