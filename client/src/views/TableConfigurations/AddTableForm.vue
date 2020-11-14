<template>
  <form @submit.prevent="onSubmit">
    <TextInput />
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue';
import TextInput from '../../components/universal/TextInput.vue';
import { useStore } from 'vuex';
export default {
  components: { TextInput },
  setup() {
    const state = reactive({});
    const store = useStore();

    const onSubmit = () => {
      store.dispatch('addTableAction', {});
    };

    return {
      ...toRefs(state),
      onSubmit,
    };
  },
};
</script>

<style></style>
