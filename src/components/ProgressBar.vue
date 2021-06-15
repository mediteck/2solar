<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      v-bind:style="progressStyle"
      aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {{ progress }}%
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationForm",
  props: {
    progress: Number,
  },
  computed: {
    progressStyle: function() {
      return { width: this.progress + "%" };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
