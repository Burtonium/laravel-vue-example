import assert from 'assert';
import * as mutations from '../../mutation-types';
import * as actions from '../../action-types';
import players from '../../../api/players';

export default {
  async [actions.FETCH_PLAYERS](context) {
    const response = await players.fetchAll();
    assert(response && response.status === 200);
    context.commit(mutations.SET_PLAYERS, response.data);
    return response;
  },
  async [actions.FETCH_PLAYER](context, id) {
    console.log("WE IN HERE YO");
    const response = await players.fetchOne(id);
    assert(response.status === 200);
    const { player, teams } = response.data;
    context.commit(mutations.SET_SELECTED_PLAYER, player);
    context.commit(mutations.SET_SELECTED_PLAYER_TEAMS, teams);
    return response;
  },
  async [actions.ADD_PLAYER](context, player) {
    const response = await players.create(player);
    assert(response.status === 200);
    context.commit(mutations.ADD_PLAYER, response.data.player);
    return response;
  } 
};
