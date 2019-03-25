<template>
  <div>
    <spinner v-if="loading" />
    <div v-else>
      <player-details-view :player="selectedPlayer" />
      <player-team-history-table class="mt-4" :teams="selectedPlayerTeams"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PlayerDetailsView from '@/js/components/PlayerDetailsView.vue';
import PlayerTeamHistoryTable from '@/js/components/PlayerTeamHistoryTable.vue';
import Spinner from '@/js/components/Spinner.vue';
import { FETCH_PLAYER } from '@/js/store/action-types';

export default {
  components: {
    PlayerDetailsView,
    PlayerTeamHistoryTable,
    Spinner,
  },
  data: () => ({
    loading: true,
  }),
  created() {
    this.initialize();
  },
  computed: {
    ...mapGetters(['selectedPlayer', 'selectedPlayerTeams']),
    playerId() {
      return this.$route.params.id;
    }
  },
  methods: {
    initialize() {
      this.$store.dispatch(FETCH_PLAYER, this.playerId).finally(() => { this.loading = false; });
    }
  }
}
</script>