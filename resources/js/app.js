import Vue from 'vue';
import App from '@/js/App.vue';
import router from '@/js/routes';
import store from '@/js/store';
import '@/js/vuetify';

new Vue({ 
  router, 
  store,
  render: h => h(App),
}).$mount('#app');
