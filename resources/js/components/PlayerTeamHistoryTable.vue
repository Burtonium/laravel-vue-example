<template>
  <div>
    <v-toolbar flat color="white" class="bordered">
      <v-toolbar-title>Team History</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="teams"
      class="elevation-1"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr class="clickable" @click="viewTeam(props.item.id)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.contract.createdAt }}</td>
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
        No contracts signed yet
      </template>
    </v-data-table>
  </div>
</template>
<script>
import TeamsModal from '@/js/components/TeamsModal.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    TeamsModal,
  },
  data: () => ({
    pagination: {
      rowsPerPage: 10,
    },
    selectedTeam: {},
    showModal: false,
  }),
  props: ['teams'],
  computed: {
    ...mapGetters(['logged', 'user']),
    headers() {
      const headers =  [
        { text: 'Team name', value: 'firstName' },
        { text: 'Contract created', value: 'contractCreated' },
        { text: 'Contract termination', value: 'terminationDate' },
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
    viewTeam(id) {
      this.$router.push({ name: 'team', params: { id } });
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