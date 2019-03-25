<template>
  <div>
    <h2>Player: {{ fullName }}</h2>
    <h4>Created: {{ player.createdAt }}</h4>
    <h4>Last updated: {{ player.updatedAt }}</h4>
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