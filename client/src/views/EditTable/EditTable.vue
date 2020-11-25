<template>
  <PageLayout>
    <H1>Edit Table</H1>
    <P>{{ errorMessage }}</P>
    <EditTableForm />
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/Typography/H1.vue';
import P from '@/components/Typography/P.vue';
import useErrorMessage from '@/composables/useErrorMessage';
import EditTableForm from './EditTableForm.vue';

export default {
  components: {
    PageLayout,
    H1,
    P,
    EditTableForm,
  },
  setup() {
    const { errorMessage } = useErrorMessage();

    return {
      errorMessage,
    };
  },
};
</script>

<style></style>
