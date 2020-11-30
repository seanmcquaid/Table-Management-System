<template>
  <router-link :to="route" class="linkButton"><slot /></router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: [Object, String],
      required: true,
    },
  },
};
</script>

<style scoped>
.linkButton {
  padding: 1rem;
  border: 2px solid black;
  margin: 1rem;
  background-color: black;
}

a {
  color: white;
  text-decoration: none;
  font-family: 'Karla', sans-serif;
}

a:hover {
  text-decoration: underline;
}
</style>
