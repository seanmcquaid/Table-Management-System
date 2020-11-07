<template>
  <PageLayout>
    <H1>Login</H1>
    <form @submit.prevent="onSubmit">
      <TextInput
        @input="inputOnChange"
        name="username"
        :value="state.username"
        label="Username"
        placeholder="Username here"
        type="text"
      />
      <TextInput
        @input="inputOnChange"
        name="password"
        :value="state.password"
        label="Password"
        placeholder="Password here"
        type="password"
      />
      <Button type="submit">Login</Button>
    </form>
  </PageLayout>
</template>

<script>
import { reactive } from 'vue';
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import Button from '@/components/universal/Button.vue';
import TextInput from '@/components/universal/TextInput.vue';

export default {
  name: 'Login',
  components: {
    PageLayout,
    H1,
    Button,
    TextInput,
  },
  setup() {
    const state = reactive({
      username: '',
      password: '',
    });

    const inputOnChange = event => {
      state[event.target.name] = event.target.value;
      console.log(state);
    };

    const onSubmit = () => {
      console.log(state);
    };

    return {
      state,
      onSubmit,
      inputOnChange,
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
