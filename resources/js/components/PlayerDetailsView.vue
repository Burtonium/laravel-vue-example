<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ fullName }}</h3>
          <h4>Created: {{ player.createdAt }}</h4>
          <h4>Last updated: {{ player.updatedAt }}</h4>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['player'],
  computed: {
    fullName() {
      return `${this.player.firstName} ${this.player.lastName}`;
    }
  }
}
</script>