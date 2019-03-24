import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  teams: [],
  selectedTeam: {},
};

export default {
  actions,
  state,
  getters,
  mutations,
};
