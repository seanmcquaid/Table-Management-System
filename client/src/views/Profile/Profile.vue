<template>
  <PageLayout>
    <H1>Profile</H1>
    <P>{{ errorMessage }}</P>
    <EditProfileForm />
  </PageLayout>
</template>

<script>
import useErrorMessage from '@/composables/useErrorMessage';
import PageLayout from '../../layouts/PageLayout.vue';
import EditProfileForm from './EditProfileForm.vue';
import H1 from '@/components/Typography/H1.vue';
import P from '@/components/Typography/P.vue';
export default {
  components: { PageLayout, H1, P, EditProfileForm },
  setup() {
    const { errorMessage } = useErrorMessage();

    return {
      errorMessage,
    };
  },
};
</script>

<style></style>
