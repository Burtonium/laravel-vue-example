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
        <v-text-field v-model="item.name" label="Team name"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="close">Cancel</v-btn>
        <v-btn color="primary" @click="save">
          {{ item.id ? 'Save' : 'Register' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { ADD_TEAM, PATCH_TEAM } from '@/js/store/action-types';

export default {
  data() {
    return{
      item: this.team,
      dialog: this.show,
    }
  },
  props: {
    team: {},
    show: false,
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  computed: {
    formTitle () {
      return this.item.id ? 'Edit Team' : 'Team Registration';
    }
  },
  methods: {
    save () {
      if (this.item.id) {
        this.$store.dispatch(PATCH_TEAM, this.item);
      } else {
        this.$store.dispatch(ADD_TEAM, this.item);
      }
      this.close()
    },
    close () {
      this.dialog = false;
      setTimeout(() => {
        this.item = {};
      }, 300)
    },
  },
  
}
</script>