<template>
  <ul>
    <li v-for="table in tables" :key="table.id">
      <div class="tableInfo">
        <span>{{ table.name }} </span>
        <span>Seating Capacity : {{ table.seats }}</span>
      </div>
      <LinkButton :route="{ name: 'editTable', params: { id: table.id } }">
        Edit
      </LinkButton>
      <Button type="button" @click="deleteButtonOnClick(table.id)">
        Delete
      </Button>
    </li>
  </ul>
</template>

<script>
import Button from '@/components/Button.vue';
import LinkButton from '@/components/LinkButton.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { Button, LinkButton },
  setup() {
    const store = useStore();
    const tables = computed(() => store.state.tableConfig.tables);

    const deleteButtonOnClick = id => {
      store.dispatch('deleteTableAction', { id });
    };

    return {
      tables,
      deleteButtonOnClick,
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
