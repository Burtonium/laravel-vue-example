<template>
  <v-layout row justify-center align-center mt-5>
    <grid-loader :color="$vuetify.theme.primary" :loading="loading" size="50px"/>
  </v-layout>
</template>
<script>
export default {
  props: ['loading'],
};
</script>
