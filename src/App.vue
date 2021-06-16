<template>
  <div class="container-md">
    <div class="col">
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/login">Login</router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
