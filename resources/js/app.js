import './bootstrap';
import Vue from 'vue';
import App from '@/js/App.vue';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import axios from 'axios';
import router from '@/js/routes';

Vue.use(VueAxios, axios);
Vue.use(Vuetify);

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
