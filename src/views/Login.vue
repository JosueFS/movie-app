<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" sm="6" md="3">
      <form class="mt-8">
        <h1>Login</h1>
        <v-text-field
          label="Username"
          placeholder="Type your username"
          class="my-input"
          outlined
          v-model="username"
          color="#7159c1"
        ></v-text-field>
        <v-btn block elevation="2" large class="mr-4" @click="handleLogin"
          >Login</v-btn
        >
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    handleLogin() {
      localStorage.setItem('@Movue:username', JSON.stringify(this.username));
      this.$store.state.username = this.username;
      this.$router.push({ path: 'home' });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.$store.state.username) {
      console.log('z');
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style lang="scss">
h1 {
  padding-left: 12px;
  text-align: center;
}

form {
  max-width: 768px;
}

div.my-input.v-input .v-input__slot {
  border-radius: 4px;
}

button {
  color: #fff !important;
  background: rgb(81, 61, 152) !important;
  background: linear-gradient(
    180deg,
    rgba(81, 61, 152, 1) 0%,
    rgba(11, 0, 50, 1) 100%
  ) !important;
}
</style>
