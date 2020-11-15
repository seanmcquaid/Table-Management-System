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
    <Button type="submit" :disabled="!ableToSubmit">
      Add Table
    </Button>
  </form>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import TextInput from '../../components/universal/TextInput.vue';
import Button from '../../components/universal/Button.vue';
import { useStore } from 'vuex';
export default {
  components: { TextInput, Button },
  setup() {
    const state = reactive({ name: '', seats: 0 });
    const store = useStore();
    const ableToSubmit = computed(() => state.name.match(/\D+/));

    const onSubmit = () => {
      store.dispatch('addTableAction', {
        ...state,
      });
    };

    return {
      ...toRefs(state),
      onSubmit,
      ableToSubmit,
    };
  },
};
</script>

<style></style>
