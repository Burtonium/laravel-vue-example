<template>
  <v-toolbar class="primary" dark>
    <v-toolbar-title>
      PLAYERBASE
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <login-modal />
      <register-modal />
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { LOGOUT } from '@/js/store/action-types';
import { mapGetters } from 'vuex';
import LoginModal from '@/js/components/LoginModal.vue';
import RegisterModal from '@/js/components/RegisterModal.vue';

export default {
  components: {
    LoginModal,
    RegisterModal,
  },
  data() {
    return {
      logoutLoading: false,
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    async logout() {
      this.logoutLoading = true;
      const response = await this.$store.dispatch(LOGOUT)
        .finally(() => { this.logoutLoading = false; });
    },
  }
}
</script>