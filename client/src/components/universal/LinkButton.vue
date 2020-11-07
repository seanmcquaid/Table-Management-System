<template>
  <router-link :to="route" class="linkButton"><slot /></router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    console.log(props);
  },
};
</script>

<style scoped>
.linkButton {
  padding: 1rem;
  border: 2px solid black;
  margin: 1rem;
}
</style>
