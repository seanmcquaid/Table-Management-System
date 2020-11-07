<template>
  <label>
    {{ label }}
    <input
      @input="onChange"
      :value="value"
      :name="name"
      :placeholder="placeholder"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const onChange = event => {
      emit('input', event);
    };

    return {
      onChange,
    };
  },
};
</script>

<style></style>
