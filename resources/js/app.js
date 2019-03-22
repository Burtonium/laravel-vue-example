import './bootstrap';
import Vue from 'vue';
import App from '@/js/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from '@/js/routes';
import store from '@/js/store';
import '@/js/vuetify';

Vue.use(VueAxios, axios);

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
