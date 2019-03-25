import * as mutations from '../../mutation-types';
import * as actions from '../../action-types';
import auth from '../../../api/auth';

export default {
  async [actions.LOGIN](context, credentials) {
    const response = await auth.login(credentials);
    const success = response.status === 200;
    context.commit(mutations.LOGGED, success);
    context.commit(mutations.SET_TOKEN, success && response.data.success.token);
    context.commit(mutations.SET_USER, success && response.data.user);
    return response;
  },
  async [actions.LOGOUT](context) {
    const response = await auth.logout();
    context.commit(mutations.LOGGED, false);
    context.commit(mutations.SET_TOKEN, null);
    context.commit(mutations.SET_USER, null);
    return response;
  },
  async [actions.REGISTER](context, user) {
    const response = await auth.register(user);
    context.commit(mutations.LOGGED, false);
    return response;
  },
};
