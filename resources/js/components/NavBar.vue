<template>
  <v-toolbar class="primary" dark>
    <v-toolbar-title>
      PLAYER BASE
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn :to="'/players'" flat>
        Players
      </v-btn>
      <v-btn :to="'/teams'" flat>
        Teams
      </v-btn>
      <template v-if="logged">
        <v-btn
          flat
          @click="logout"
        >
          Logout
        </v-btn>
      </template>
      <template v-else>
        <login-modal />
        <register-modal />
      </template>
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
    ...mapGetters(['user', 'logged']),
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