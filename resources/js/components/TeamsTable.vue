<template>
  <div>
    <v-toolbar flat color="white" class="bordered">
      <v-toolbar-title>Teams</v-toolbar-title>
      <v-spacer></v-spacer>
      <teams-modal 
        v-if="logged && user.isAdmin"  
        :show="showModal" 
        :team="selectedTeam"
        @close="handleModalClose"
      />
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="teams"
      class="elevation-1"
      :loading="loading"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr class="clickable" @click="viewTeam(props.item.id)">
          <td>{{ props.item.name }}</td>
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
        {{ loading ? 'Loading data...' : 'No teams available' }}
      </template>
    </v-data-table>
  </div>
</template>
<script>
import TeamsModal from '@/js/components/TeamsModal.vue';
import { FETCH_TEAMS, DELETE_TEAM } from '@/js/store/action-types';
import { mapGetters } from 'vuex';

export default {
  components: {
    TeamsModal,
  },
  data: () => ({
    loading: true,
    pagination: {
      rowsPerPage: 10,
    },
    selectedTeam: {},
    showModal: false,
  }),
  computed: {
    ...mapGetters(['teams', 'logged', 'user']),
    headers() {
      const headers =  [
        { text: 'Team name', value: 'firstName' },
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
    handleModalClose(){
      this.showModal = false;
      this.selectedTeam = {};
    },
    viewTeam(id) {
      this.$router.push({ name: 'team', params: { id } });
    },
    initialize () {
      this.$store.dispatch(FETCH_TEAMS).finally(() => { this.loading = false });
    },
    editItem (item) {
      this.selectedTeam = item;
      this.showModal = true;
    },
    deleteItem (item) {
      const confirmed = confirm('This will delete all associated contracts. Are you sure?');
      this.$store.dispatch(DELETE_TEAM, item.id);
    },
  },
}
</script>
<style>
.bordered {
  border: 1px solid rgba(0,0,0,0.12) !important;
  
}
</style>