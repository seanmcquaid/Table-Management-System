<template>
  <PageLayout>
    <H1>Login</H1>
    <P>{{ errorMessage }}</P>
    <LoginForm />
  </PageLayout>
</template>

<script>
import useErrorMessage from '@/composables/useErrorMessage';
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/Typography/H1.vue';
import P from '@/components/Typography/P.vue';
import LoginForm from './LoginForm.vue';

export default {
  components: {
    PageLayout,
    H1,
    P,
    LoginForm,
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
