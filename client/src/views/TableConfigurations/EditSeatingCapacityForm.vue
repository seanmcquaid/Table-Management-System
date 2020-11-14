<template>
  <form @submit.prevent="onSubmit">
    <TextInput />
  </form>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import TextInput from '../../components/universal/TextInput.vue';
import { useStore } from 'vuex';
export default {
  components: { TextInput },
  setup() {
    const store = useStore();
    const state = reactive({});

    onMounted(() => {
      store.dispatch('getSeatingCapacityAction');
    });

    const onSubmit = () => {
      store.dispatch('updateSeatingCapacityAction', {});
    };

    return {
      ...toRefs(state),
      onSubmit,
    };
  },
};
</script>

<style></style>
