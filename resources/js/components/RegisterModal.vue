<template>
  <v-dialog
    v-if="show"
    v-model="showRegister"
    width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        flat
        v-on="on"
      >
        Register
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Register
      </v-card-title>
      <v-card-text>
        <v-form
          ref="registrationForm"
          v-model="valid"
        >
          <v-text-field
            v-model="name"
            label="Name"
            :rules="nameRules"
            required
          />
          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            :error="errors['email']"
            :error-messages="errors['email']"
            required
          />
          <v-text-field
            v-model="password"
            name="password"
            label="Password"
            :rules="passwordRules"
            hint="At least 6 characters"
            :error="errors['email']"
            :error-messages="errors['email']"
            required
            min="6"
            type="password"
          />
          <v-text-field
            v-model="passwordConfirmation"
            name="password"
            label="Password confirmation"
            :rules="passwordRules"
            hint="At least 6 characters"
            min="6"
            type="password"
            required
            :error="errors['password']"
            :error-messages="errors['password']"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          flat
          @click.native="showRegister = false"
        >
          Close
        </v-btn>
        <v-btn
          :loading="registerLoading"
          color="primary"
          @click.native="register"
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { REGISTER } from '../store/action-types';
import withSnackbar from './mixins/withSnackbar';

export default {
  mixins: [withSnackbar],
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      errors: [],
      internalAction: this.action,
      name: '',
      nameRules: [
        v => !!v || 'User name is mandatory',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Mail is mandatory',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email have to be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is mandatory',
        v => v.length >= 6 || 'Password at least have to be 6 characters',
      ],
      passwordConfirmation: '',
      valid: false,
      registerLoading: false,
      showRegister: false,
    };
  },
  methods: {
    async register() {
      if (this.$refs.registrationForm.validate()) {
        this.registerLoading = true;
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
        };

        const response = await this.$store.dispatch(REGISTER, user);
        this.registerLoading = false;
        this.showRegister = false;
      }
    },
  },
};
</script>
