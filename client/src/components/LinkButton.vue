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
  margin: 1rem;
  border-radius: 8px;
  outline: none;
  background-color: #100b00;
  color: white;
  border: none;
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
