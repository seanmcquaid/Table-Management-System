<template>
  <P>Seats Left : {{ seatsLeft }}</P>
  <P v-if="seatsLeft <= 0">NO SEATS LEFT!</P>
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
    const tables = computed(() => {
      return store.state.tableConfig.tables;
    });
    const totalSeatsOccupied = computed(() =>
      tables.value.reduce((total, table) => {
        if (!table.isAvailable) {
          return total + table.seats;
        }
        return total + 0;
      }, 0)
    );

    console.log(
      store.state.tableConfig.seatingCapacity,
      totalSeatsOccupied.value
    );
    const seatsLeft = computed(
      () => store.state.tableConfig.seatingCapacity - totalSeatsOccupied.value
    );

    return {
      seatsLeft,
    };
  },
};
</script>

<style></style>
