<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark class="mb-2" v-on="on">
        Register Team
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Team name"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="close">Cancel</v-btn>
        <v-btn color="primary" @click="save">
          {{ teamId ? 'Save' : 'Register' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { ADD_TEAM, PATCH_TEAM } from '@/js/store/action-types';

export default {
  data() {
    return {
      name: this.team.name,
      teamId: this.team.id,
      dialog: this.show,
    }
  },
  props: {
    team: {},
    show: false,
  },
  watch: {
    show(val) {
      this.dialog = val;
    },
    dialog(val) {
      if (!val) {
        this.$emit('close');
      }
    },
    team({ name, id }) {
      this.teamId = id;
      this.name = name;
    }
  },
  computed: {
    formTitle () {
      return this.teamId ? 'Edit Team' : 'Team Registration';
    }
  },
  methods: {
    save () {
      if (this.teamId) {
        this.$store.dispatch(PATCH_TEAM, { id: this.teamId, name: this.name });
      } else {
        this.$store.dispatch(ADD_TEAM, { name: this.name });
      }
      this.close()
    },
    close () {
      this.dialog = false;
    },
  },
  
}
</script>