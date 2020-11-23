<template>
  <PageLayout>
    <H1>Table Configurations</H1>
    <P>{{ errorMessage }}</P>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import P from '@/components/universal/Typography/P.vue';
import useErrorMessage from '@/composables/useErrorMessage';

export default {
  components: {
    PageLayout,
    H1,
    P,
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
