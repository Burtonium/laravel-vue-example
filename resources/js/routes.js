import Vue from 'vue';
import Router from 'vue-router';
import Example from '@/js/components/ExampleComponent';

Vue.use(Router);

const routes = [
  {
    name: 'Example',
    path: '/',
    component: Example,
  },
];

export default new Router({ mode: 'history', routes });
