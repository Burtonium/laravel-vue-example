import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  teams: [],
  selectedTeam: {},
  selectedTeamPlayers: [],
};

export default {
  actions,
  state,
  getters,
  mutations,
};
