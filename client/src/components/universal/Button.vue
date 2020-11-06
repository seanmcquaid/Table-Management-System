<template>
  <button @click="onClick"><slot /></button>
</template>

<script>
export default {
  props: {
    onClick: Function,
  },
};
</script>

<style scoped>
button {
}
</style>
