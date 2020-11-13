<template>
  <PageLayout>
    <H1>Table Configurations</H1>
    <EditSeatingCapacityForm />
    <AddTableForm />
    <Tables />
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import EditSeatingCapacityForm from './EditSeatingCapacityForm.vue';
import AddTableForm from './AddTableForm.vue';
import Tables from './Tables.vue';

export default {
  components: {
    PageLayout,
    H1,
    EditSeatingCapacityForm,
    AddTableForm,
    Tables,
  },
};
</script>

<style></style>
