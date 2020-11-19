<template>
  <PageLayout>
    <H1>Table Configurations</H1>
    <P>{{ errorMessage }}</P>
    <EditSeatingCapacityForm />
    <!-- <AddTableForm />
    <Tables /> -->
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import P from '@/components/universal/Typography/P.vue';
import useErrorMessage from '@/composables/useErrorMessage';
import EditSeatingCapacityForm from './EditSeatingCapacityForm.vue';
// import AddTableForm from './AddTableForm.vue';
// import Tables from './Tables.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';

export default {
  components: {
    PageLayout,
    H1,
    P,
    EditSeatingCapacityForm,
    // AddTableForm,
    // Tables,
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
