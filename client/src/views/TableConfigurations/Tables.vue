<template>
  <ul>
    <li v-for="table in tables" :key="table.id">
      <span>{{ table.name }}</span>
      <LinkButton route="/editTable/{{table.id}}">Edit</LinkButton>
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

<style scoped></style>
