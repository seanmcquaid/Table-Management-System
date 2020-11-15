<template>
  <div></div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const tables = computed(() => store.state.tableConfig.tables);

    return {
      tables,
    };
  },
};
</script>

<style></style>
