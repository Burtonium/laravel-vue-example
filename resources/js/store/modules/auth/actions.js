import * as mutations from '../../mutation-types';
import * as actions from '../../action-types';
import auth from '../../../api/auth';

export default {
  async [actions.LOGIN](context, credentials) {
    await auth.login(credentials);
    context.commit(mutations.LOGGED);
  },
  async [actions.LOGOUT](context) {
    await auth.logout();
    context.commit(mutations.LOGGED, false);
  },
  async [actions.REGISTER](context, user) {
    await auth.register(user);
    context.commit(mutations.LOGGED, false);
  },
  async [actions.REMEMBER_PASSWORD](_context, email) {
    await auth.remember(email);
  },
  async [actions.RESET_PASSWORD](_context, user) {
    await auth.reset(user);
  },
};
