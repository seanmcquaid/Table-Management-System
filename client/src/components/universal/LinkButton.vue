<template>
  <router-link to="route"><slot /></router-link>
</template>

<script>
export default {
  props: {
    route: String,
  },
};
</script>

<style scoped></style>
