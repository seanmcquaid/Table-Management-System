<template>
  <ul>
    <li v-for="table in tables" :key="table.id">
      <div class="tableInfo">
        <span>{{ table.name }} </span>
        <span>Seating Capacity : {{ table.seats }}</span>
      </div>
      <Button type="button" :disabled="!table.isAvailable">
        Available
      </Button>
      <Button type="button" :disabled="table.isAvailable">
        Occupied
      </Button>
    </li>
  </ul>
</template>

<script>
import Button from '@/components/Button.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { Button },
  setup() {
    const store = useStore();
    const tables = computed(() => store.state.tableConfig.tables);

    return {
      tables,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.tableInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
