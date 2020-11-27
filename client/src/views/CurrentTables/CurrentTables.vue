<template>
  <PageLayout>
    <H1>Current Tables</H1>
    <P>{{ errorMessage }}</P>
    <SeatingCapacity />
    <Tables />
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import SeatingCapacity from './SeatingCapacity.vue';
import Tables from './Tables.vue';
import H1 from '@/components/Typography/H1.vue';
import P from '@/components/Typography/P.vue';
import useErrorMessage from '@/composables/useErrorMessage';
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    PageLayout,
    H1,
    P,
    SeatingCapacity,
    Tables,
  },
  setup() {
    const store = useStore();
    const { errorMessage } = useErrorMessage();

    onMounted(() => {
      store.dispatch('getTableConfigAction');
    });

    return {
      errorMessage,
    };
  },
};
</script>

<style></style>
