import * as mutations from '../../mutation-types';
import * as actions from '../../action-types';
import teams from '../../../api/teams';

export default {
  async [actions.FETCH_TEAMS](context) {
    const teams = await teams.fetchAll();
    context.commit(mutations.SET_TEAMS, teams);
  },
  async [actions.FETCH_TEAM](context, id) {
    const team = await teams.fetchOne(id);
    context.commit(mutations.SET_SELECTED_TEAM, team);
  },
};
