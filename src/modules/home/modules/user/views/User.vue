<template>
  <v-container fill-height mt-12>
    <v-row justify="center">
      <v-col xs="12" sm="6" md="4">
        <v-card class="elevation-12 ma-24">
          <v-toolbar class="elevation-0">
            <v-toolbar-title>{{ texts.toolbar }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-switch
              align-center
              v-model="$vuetify.theme.dark"
              inset
              persistent-hint
              prepend-icon="mdi-weather-sunny"
              append-icon="mdi-weather-night"
            ></v-switch>
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                prepend-inner-icon="mdi-email"
                outlined
                name="email"
                label="Email"
                type="email"
                :error-messages="emailErrors"
                :success="!$v.user.email.$invalid"
                v-model.trim="$v.user.email.$model"
              ></v-text-field>
            </v-form>

            <v-btn
              block
              depressed
              color="primary"
              :disabled="$v.$invalid || isLoading"
              @click="submit"
            >
              <template v-if="!isLoading">
                {{ texts.button }}
              </template>

              <template v-else>
                <v-progress-circular
                  indeterminate
                  color="white"
                  width="3"
                  size="25"
                ></v-progress-circular>
              </template>
            </v-btn>
          </v-card-text>

          <v-snackbar
            v-model="showSnackbar"
            timeout="60000"
            width="fit-content"
            min-width="300px"
            max-width="100%"
          >
            {{ error }}
            <template v-slot:action="{ attrs }">
              <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="showSnackbar = false"
              >
                Fechar
              </v-btn>
            </template>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

import { formatError } from '@/utils';

import AuthService from '@/modules/auth/services/auth.service';

export default {
  name: 'Login',
  data: () => ({
    icon: '',
    error: undefined,
    isLogin: true,
    isLoading: false,
    showSnackbar: false,
    user: {
      email: '',
    },
  }),
  validations: {
    user: {
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    texts() {
      return {
        toolbar: 'Update Profile',
        button: 'Update',
        link: 'Já tenho uma conta',
      };
    },
    emailErrors() {
      const errors = [];
      const email = this.$v.user.email;
      if (!email.$dirty) return errors;

      !email.required && errors.push('Email obrigatório');
      !email.email && errors.push('Email inválido');

      return errors;
    },
  },
  methods: {
    async submit() {
      this.isLoading = true;

      try {
        await AuthService.update(this.user.email);

        this.setUser();
      } catch (error) {
        console.log(error);
        this.error = formatError(error.message);
        this.showSnackbar = true;
      } finally {
        this.isLoading = false;
      }
    },
    ...mapActions(['setUser', 'setTitle']),
  },
  created() {
    this.setTitle({ title: 'Profile' });
  },
};
</script>

<style lang="scss">
div.v-input.v-input--selection-controls.v-input--switch.v-input--switch--inset,
div.v-input.v-input--is-label-active.v-input--is-dirty.v-input--selection-controls.v-input--switch.v-input--switch--inset.primary--text {
  align-items: center;

  > div.v-input__control {
    height: 24px;

    div.v-input--selection-controls__input {
      margin-right: 0;
    }
  }
  div.v-input__append-outer {
    margin-left: 0;
  }
}

div.v-text-field__details {
  margin: 4px 0 4px;
}

.v-input__slot {
  margin-bottom: 0 !important;
}

div.v-text-field__slot > label.v-label {
  line-height: 24px;
}
</style>
