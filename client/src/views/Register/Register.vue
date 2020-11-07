<template>
  <PageLayout>
    <H1>Register</H1>
    <form @submit.prevent="onSubmit">
      <input v-model="state.username" name="username" type="text" />
      <input v-model="state.password" name="password" type="text" />
      <Button type="submit">Register</Button>
    </form>
  </PageLayout>
</template>

<script>
import { reactive } from 'vue';
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import Button from '@/components/universal/Button.vue';

export default {
  name: 'Register',
  components: {
    PageLayout,
    H1,
    Button,
  },
  setup() {
    const state = reactive({
      username: '',
      password: '',
      confirmPassword: '',
    });

    const onSubmit = () => {
      console.log(state);
    };

    return {
      state,
      onSubmit,
    };
  },
};
</script>

<style scoped></style>
