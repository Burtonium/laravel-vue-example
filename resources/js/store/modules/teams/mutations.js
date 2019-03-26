import * as types from '../../mutation-types';

export default {
  [types.SET_TEAMS](state, teams) {
    state.teams = teams;
  },
  [types.SET_SELECTED_TEAM](state, team) {
    state.selectedTeam = team;
  },
  [types.SET_SELECTED_TEAM_PLAYERS](state, players) {
    state.selectedTeamPlayers = players;
  },
  [types.ADD_TEAM](state, team) {
    state.teams.push(team);
  },
  [types.PATCH_TEAM](state, team) {
    const index = state.teams.findIndex(({ id }) => id === team.id);
    state.teams.splice(index, 1, team);
  },
  [types.DELETE_TEAM](state, id) {
    const index = state.teams.findIndex(t => t.id === id);
    state.teams.splice(index, 1);
  },
};
