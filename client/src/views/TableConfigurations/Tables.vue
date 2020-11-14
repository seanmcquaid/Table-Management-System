<template>
  <div></div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const tables = computed(() => store.state.tables.tables);

    onMounted(() => {
      store.dispatch('getTablesAction');
    });

    return {
      tables,
    };
  },
};
</script>

<style></style>
