<template>
  <div>
    <v-toolbar flat color="white" class="bordered">
      <v-toolbar-title>Players</v-toolbar-title>
      <v-spacer></v-spacer>
      <player-modal v-if="logged"  :show="showModal" :player="selectedPlayer"/>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="players"
      class="elevation-1"
      :loading="loading"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr class="clickable" @click="viewPlayer(props.item.id)">
          <td>{{ props.item.firstName }}</td>
          <td>{{ props.item.lastName }}</td>
          <td>{{ props.item.team ? props.item.team.name : 'Free Agent' }}</td>
          <td>{{ props.item.createdAt }}</td>
          <td>{{ props.item.updatedAt }}</td>
          <td class="text-xs-right" v-if="logged && user.isAdmin">
            <v-icon
              small
              class="mr-2"
              @click.stop="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click.stop="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
        </tr>
      </template>
      <template v-slot:no-data>
        {{ loading ? 'Loading data...' : 'No players available' }}
      </template>
    </v-data-table>
  </div>
</template>
<script>
import PlayerModal from '@/js/components/PlayerModal.vue';
import { FETCH_PLAYERS } from '@/js/store/action-types';
import { mapGetters } from 'vuex';

export default {
  components: {
    PlayerModal,
  },
  data: () => ({
    loading: true,
    pagination: {
      rowsPerPage: 10,
    },
    selectedPlayer: {},
    showModal: false,
  }),
  computed: {
    ...mapGetters(['players', 'logged', 'user']),
    headers() {
      const headers =  [
        { text: 'First name', value: 'firstName' },
        { text: 'Last name', value: 'lastName' },
        { text: 'Current team', value: 'team' },
        { text: 'Created', value: 'createdAt' },
        { text: 'Last updated', value: 'updatedAt' },
      ];

      const actions = { 
        text: 'Actions', 
        value: 'name', 
        sortable: false, 
        align: 'right', 
        width: '0' 
      };
      return this.logged && this.user.isAdmin ? headers.concat(actions) : headers;
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    viewPlayer(id) {
      this.$router.push({ name: 'player', params: { id } });
    },
    initialize () {
      this.$store.dispatch(FETCH_PLAYERS).finally(() => { this.loading = false });
    },
    editItem (item) {
      // TODO
    },
    deleteItem (item) {
      // TODO
    },
  },
}
</script>
<style>
.bordered {
  border: 1px solid rgba(0,0,0,0.12) !important;
  
}
</style>