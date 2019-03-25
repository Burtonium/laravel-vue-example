import Vue from 'vue';
import Router from 'vue-router';
import Players from '@/js/pages/Players.vue';
import PlayerDetails from '@/js/pages/PlayerDetails.vue';
import Teams from '@/js/pages/Teams.vue';
import TeamDetails from '@/js/pages/TeamDetails.vue';

Vue.use(Router);

const routes = [{
    name: 'home',
    path: '/',
    redirect: '/players',
  }, {
    name: 'players',
    path: '/players',
    component: Players,
  }, {
    name: 'player',
    path: '/players/:id',
    component: PlayerDetails,
  }, {
    name: 'teams',
    path: '/teams',
    component: Teams,
  }, {
    name: 'team',
    path: '/teams/:id',
    component: TeamDetails,
  },
];

export default new Router({ mode: 'history', routes });
