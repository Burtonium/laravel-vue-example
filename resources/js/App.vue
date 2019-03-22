<template>
  <v-app
    v-cloak
    light
  >
    <snackbar />
    <v-toolbar class="primary">
      <v-toolbar-title>App Name</v-toolbar-title>
      <v-spacer />
      <button>Suh</button>
    </v-toolbar>
    <transition name="fade">
      <router-view />
    </transition>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      drawer: null,
      drawerRight: false,
      logoutLoading: false,
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    toogleRightDrawer() {
      this.drawerRight = !this.drawerRight;
    },
    async logout() {
      this.logoutLoading = true;
      const response = await this.$store.dispatch(actions.LOGOUT)
        .finally(() => { this.logoutLoading = false; });
    },
  },
};
</script>
<style>
[v-cloak] > * { display:none; }
[v-cloak]::before {
    content: " ";
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
