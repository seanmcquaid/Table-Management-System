<template>
  <label>
    {{ label }}
    <input
      @input="onChange"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :type="type"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
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
    type: {
      type: String,
      required: true,
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

<style scoped>
label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  padding: 0.5rem;
  margin: 0.5rem;
  outline: none;
  border-radius: 8px;
  border: 2px solid black;
}
</style>
