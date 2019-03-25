<template>
  <div>
    <h2>Team: {{ team.name }}</h2>
    <h4>Created: {{ team.createdAt }}</h4>
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