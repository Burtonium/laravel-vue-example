import * as types from '../../mutation-types';

export default {
  [types.SET_TEAMS](state, teams) {
    state.teams = teams;
  },
  [types.SET_SELECTED_TEAM](state, team) {
    state.selectedTeam = team;
  },
};
