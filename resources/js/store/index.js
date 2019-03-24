import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';
import auth from './modules/auth';
import snackbar from './modules/snackbar';
import teams from './modules/teams';
import players from './modules/players';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  plugins,
  modules: {
    auth,
    snackbar,
    teams,
    players,
  },
  strict: debug,
});
