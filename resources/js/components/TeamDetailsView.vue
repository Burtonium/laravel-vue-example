<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ team.name }}</h3>
          <div> Created: {{ team.createdAt }} </div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    team: {
      default: () => ({}),
    },
  },
}
</script>