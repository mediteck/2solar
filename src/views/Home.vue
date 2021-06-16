<template>
  <div class="home">
    <InformationForm />
  </div>
</template>

<script>
// @ is an alias to /src
import InformationForm from "@/components/InformationForm.vue";

export default {
  name: "Home",
  components: {
    InformationForm,
  },
};
</script>
