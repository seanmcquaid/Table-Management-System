<template>
  <input @input="onChange" />
</template>

<script>
import {} from 'vue';
export default {
  setup(props, { emit }) {
    const onChange = event => {
      emit('input', event.target.value);
    };

    return {
      onChange,
    };
  },
};
</script>

<style></style>
