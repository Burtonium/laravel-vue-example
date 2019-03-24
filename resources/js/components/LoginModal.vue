<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        flat
        v-on="on"
      >
        Login
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Login
      </v-card-title>

      <v-card-text>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="password"
            label="Password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="cancel"
        >
          Close
        </v-btn>
        <v-btn
          color="primary"
          @click="login"

          :loading="loginLoading"
        >
          Sign in
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { LOGIN } from '@/js/store/action-types';

export default {
  data () {
    return {
      dialog: false,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
      },
      loginLoading: false,
    }
  },
  methods: {
    async login() {
        const credentials = { email: this.email, password: this.password };
        this.loginLoading = true;
        const { data, status } = await this.$store.dispatch(LOGIN, credentials)
          .finally(() => { this.loginLoading = false; });
        if (status === 200) {
          this.dialog = false;
        }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    cancel() {
      this.dialog = false;
      this.reset();
    }
  }
}
</script>