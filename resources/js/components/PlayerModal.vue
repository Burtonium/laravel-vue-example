<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on }" v-if="!noButton">
      <v-btn color="primary" dark class="mb-2" v-on="on">
        Register Player
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>

              <v-text-field v-model="item.firstName" label="First name"></v-text-field>

              <v-text-field v-model="item.lastName" label="Last name"></v-text-field>

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
import { ADD_PLAYER, PATCH_PLAYER } from '@/js/store/action-types';

export default {
  data() {
    return{
      item: this.player,
      dialog: this.show,
    }
  },
  props: {
    player: {},
    show: false,
    noButton: false,
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  computed: {
    formTitle () {
      return this.item.id ? 'Edit Player' : 'Player Registration';
    }
  },
  methods: {
    save () {
      if (this.item.id) {
        this.$store.dispatch(PATCH_PLAYER, this.item);
      } else {
        this.$store.dispatch(ADD_PLAYER, this.item);
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