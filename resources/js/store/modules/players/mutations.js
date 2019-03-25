import * as types from '../../mutation-types';

export default {
  [types.SET_PLAYERS](state, players) {
    state.players = players;
  },
  [types.SET_SELECTED_PLAYER](state, player) {
    state.selectedPlayer = player;
  },
  [types.SET_SELECTED_PLAYER_TEAMS](state, teams) {
    state.selectedPlayerTeams = teams;
  },
  [types.ADD_PLAYER](state, player) {
    state.players.push(player);
  }
};
