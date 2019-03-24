import Vue from 'vue';
import Router from 'vue-router';
import Players from '@/js/pages/Players.vue';
import Teams from '@/js/pages/Teams.vue';

Vue.use(Router);

const routes = [{
    name: 'Home',
    path: '/',
    redirect: '/players',
  }, {
    name: 'Players',
    path: '/players',
    component: Players,
  }, {
    name: 'Teams',
    path: '/teams',
    component: Teams,
  },
];

export default new Router({ mode: 'history', routes });
