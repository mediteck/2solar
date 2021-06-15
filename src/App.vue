<template>
  <div class="container-md">
    <div class="col">
      <div id="app">
        <InformationForm />
      </div>
    </div>
  </div>
</template>

<script>
import InformationForm from "./components/InformationForm.vue";

export default {
  name: "App",
  components: {
    InformationForm,
  },
};
</script>

<style></style>
