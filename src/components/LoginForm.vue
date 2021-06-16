<template>
  <div class="hello">
    <h1 class="mb-3">Please login</h1>
    <form
      id="login"
      name="login"
      method="POST"
      @submit="checkForm"
      v-if="!isAuthenticated"
    >
      <div class="row mb-3">
        <label for="username" class="col-sm-2 form-label">Username</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="col-sm-10 form-control"
            id="username"
            name="username"
            v-model="username"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="password" class="col-sm-2 form-label">Email address</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="col-sm-10 form-control"
            id="password"
            name="password"
            v-model="password"
            required
          />
        </div>
      </div>
      <div v-show="error" class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <div class="alert alert-danger" role="alert">
            {{ error }}
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
    <button type="button" class="btn btn-primary" v-else @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      username: null,
      password: null,
      error: null,
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      if (this.username == "admin" && this.password == "admin01") {
        this.$store.commit("authenticate");
        this.$router.push("/");
      } else
        this.error =
          "Invalid username/password, you probably meant admin/admin01";
    },
    logout: function() {
      this.$store.commit("dethenticate");
    },
  },
  computed: {
    isAuthenticated: function() {
      return this.$store.state.isAuthenticated;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
