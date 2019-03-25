<template>
  <div>
    <spinner :loading="loading" v-if="loading" />
    <div v-else>
      <team-details-view :team="selectedTeam" />
      <team-players-table :players="selectedTeamPlayers" class="mt-4" />
    </div>
  </div>
</template>
<script>
import Spinner from '@/js/components/Spinner.vue';
import TeamDetailsView from '@/js/components/TeamDetailsView.vue';
import TeamPlayersTable from '@/js/components/TeamPlayersTable.vue';
import { FETCH_TEAM } from '@/js/store/action-types';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    TeamDetailsView,
    TeamPlayersTable,
    Spinner,
  },
  data: () => ({
    loading: true,
  }),
  computed: {
    ...mapGetters(['selectedTeam', 'selectedTeamPlayers']),
    teamId() {
      return this.$route.params.id;
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$store.dispatch(FETCH_TEAM, this.teamId).finally(() => { this.loading = false; });
    }
  }
}
</script>