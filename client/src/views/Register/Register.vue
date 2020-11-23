<template>
  <PageLayout>
    <H1>Register</H1>
    <P>{{ errorMessage }}</P>
    <RegisterForm />
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import useErrorMessage from '@/composables/useErrorMessage';
import H1 from '@/components/Typography/H1.vue';
import P from '@/components/Typography/P.vue';
import RegisterForm from './RegisterForm.vue';

export default {
  components: {
    PageLayout,
    H1,
    P,
    RegisterForm,
  },
  setup() {
    const { errorMessage } = useErrorMessage();

    return {
      errorMessage,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
