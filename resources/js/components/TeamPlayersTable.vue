<template>
  <div>
    <v-toolbar flat color="white" class="bordered">
      <v-toolbar-title>Players</v-toolbar-title>
      <v-spacer></v-spacer>
      <div width="50px">
        <v-select
          v-model="currentFilter"
          :items="playerFilters"
          label="Filter"
          return-object
          single-line
          width="80px"
        ></v-select>
      </div>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="filteredPlayers"
      class="elevation-1"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr class="clickable" @click="viewPlayer(props.item.id)">
          <td>{{ props.item.firstName }}</td>
          <td>{{ props.item.lastName }}</td>
          <td>{{ props.item.contract.terminationDate }}</td>
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
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    pagination: {
      rowsPerPage: 10,
    },
    selectedPlayer: {},
    showModal: false,
    currentFilter: 'Current',
  }),
  props: {
    players: {
      default: () => [],
    }
  },
  computed: {
    ...mapGetters(['logged', 'user']),
    playerFilters() {
      return ['Current', 'Previous'];
    },
    filteredPlayers() {
      return this.currentFilter === 'Current' ?
        this.players.filter(p => new Date(p.contract.terminationDate) > new Date()) :
        this.players.filter(p => new Date(p.contract.terminationDate) < new Date()) ;
    },
    headers() {
      const headers =  [
        { text: 'First name', value: 'firstName' },
        { text: 'Last name', value: 'lastName' },
        { text: 'Contract Expiration', value: 'team' },
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
  methods: {
    switchFilter(e) {
      console.log(e);
    },
    viewPlayer(id) {
      this.$router.push({ name: 'player', params: { id } });
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