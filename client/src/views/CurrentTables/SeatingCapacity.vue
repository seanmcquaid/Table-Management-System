<template>
  <!-- <P>{{ seatingCapacity }}</P> -->
  <P>Hello</P>
</template>

<script>
import { useStore } from 'vuex';
import P from '@/components/Typography/P.vue';
import { computed } from 'vue';

export default {
  components: {
    P,
  },
  setup() {
    const store = useStore();
    const tables = computed(() => store.state.tableConfig.tables);
    console.log(tables.value);
    // const totalSeatsOccupied = computed(() =>
    //   store.state.tableConfig.tables.reduce((total, table) => {
    //     console.log(table);
    //     if (table.isAvailable) {
    //       return total + table.seats;

    //     }
    //     return 0;
    //   })
    // );
    // const seatsLeft = computed(
    //   () => store.state.tableConfig.seatingCapacity - totalSeatsOccupied.value
    // );

    // console.log(totalSeatsOccupied.value);

    // console.log(totalSeatsOccupied.value);

    // return {
    //   seatsLeft,
    // };
  },
};
</script>

<style></style>
