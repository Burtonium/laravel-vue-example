<template>
  <v-app
    v-cloak
    light
  >
    <v-snackbar />
    <nav-bar />
    <transition name="fade">
      <router-view />
    </transition>
  </v-app>
</template>
<script>
import NavBar from '@/js/components/NavBar.vue';
export default {
  components: {
    NavBar,
  }
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
