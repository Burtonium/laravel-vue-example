import * as mutations from '../../mutation-types';
import * as actions from '../../action-types';
import teams from '../../../api/teams';
import assert from 'assert';

export default {
  async [actions.FETCH_TEAMS](context) {
    const response = await teams.fetchAll();
    assert(response && response.status === 200);
    context.commit(mutations.SET_TEAMS, response.data);
    return response;
  },
  async [actions.FETCH_TEAM](context, id) {
    const response = await teams.fetchOne(id);
    assert(response && response.status === 200);
    const { team, players } = response.data;
    context.commit(mutations.SET_SELECTED_TEAM, team);
    context.commit(mutations.SET_SELECTED_TEAM_PLAYERS, players);
  },
  async [actions.ADD_TEAM](context, team) {
    const response = await teams.create(team);
    assert(response && response.status === 200);
    context.commit(mutations.ADD_TEAM, team);
  }
};
