<template>
  <form @submit.prevent="onSubmit">
    <TextInput
      @input="inputOnChange"
      name="name"
      :value="name"
      label="Name"
      placeholder="Table name here"
      type="text"
    />
    <TextInput
      @input="inputOnChange"
      name="seats"
      :value="seats"
      label="Seats"
      placeholder="Table seats here"
      type="text"
    />
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue';
import TextInput from '../../components/universal/TextInput.vue';
import { useStore } from 'vuex';
export default {
  components: { TextInput },
  setup() {
    const state = reactive({ name: '', seats: 0 });
    const store = useStore();

    const onSubmit = () => {
      store.dispatch('addTableAction', {
        ...state,
      });
    };

    return {
      ...toRefs(state),
      onSubmit,
    };
  },
};
</script>

<style></style>
