import * as mutations from '../../mutation-types';
import * as actions from '../../action-types';
import auth from '../../../api/auth';

export default {
  async [actions.LOGIN](context, credentials) {
    const response = await auth.login(credentials);
    context.commit(mutations.LOGGED, response.status === 200);
    context.commit(mutations.SET_TOKEN, response.success.token);
    return response;
  },
  async [actions.LOGOUT](context) {
    const response = await auth.logout();
    context.commit(mutations.LOGGED, false);
    return response;
  },
  async [actions.REGISTER](context, user) {
    const response = await auth.register(user);
    context.commit(mutations.LOGGED, false);
    return response;
  },
};
