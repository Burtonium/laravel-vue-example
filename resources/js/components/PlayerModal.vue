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
        <v-text-field v-model="firstName" label="First name"></v-text-field>
        <v-text-field v-model="lastName" label="Last name"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="close">Cancel</v-btn>
        <v-btn color="primary" @click="save">
          {{ player.id ? 'Save' : 'Register' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { ADD_PLAYER, PATCH_PLAYER } from '@/js/store/action-types';

export default {
  data() {
    return {
      firstName: this.player && this.player.firstName,
      lastName: this.player && this.player.lastName,
      dialog: this.show,
    };
  },
  props: {
    player: {},
    show: false,
    noButton: false,
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
    player(player) {
      this.firstName = player.firstName;
      this.lastName = player.lastName;
    }
  },
  computed: {
    formTitle () {
      return this.player.id ? 'Edit Player' : 'Player Registration';
    }
  },
  methods: {
    save () {
      if (this.player.id) {
        this.$store.dispatch(PATCH_PLAYER, { 
          id: this.player.id,
          firstName: this.firstName,
          lastName: this.lastName,
        });
      } else {
        this.$store.dispatch(ADD_PLAYER, {
          firstName: this.firstName,
          lastName: this.lastName
        });
      }
      this.close()
    },
    close () {
      this.dialog = false;
      setTimeout(() => {
        this.firstName = '';
        this.lastName = '';
      }, 300)
    },
  },
  
}
</script>