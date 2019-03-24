import * as types from '../../mutation-types';

export default {
  [types.LOGGED](state, logged) {
    state.logged = logged;
  },
  [types.USER](state, user) {
    state.user = user;
  },
  [types.SET_TOKEN](state, token) {
    state.token = token;
  }
};
