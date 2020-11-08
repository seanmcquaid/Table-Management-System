<template>
  <PageLayout>
    <H1>Login</H1>
    <P>{{ errorMessage }}</P>
    <form @submit.prevent="onSubmit">
      <TextInput
        @input="inputOnChange"
        name="username"
        :value="username"
        label="Username"
        placeholder="Username here"
        type="text"
      />
      <TextInput
        @input="inputOnChange"
        name="password"
        :value="password"
        label="Password"
        placeholder="Password here"
        type="password"
      />
      <Button type="submit">Login</Button>
    </form>
  </PageLayout>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import P from '@/components/universal/Typography/P.vue';
import Button from '@/components/universal/Button.vue';
import TextInput from '@/components/universal/TextInput.vue';
import { useStore } from 'vuex';

export default {
  components: {
    PageLayout,
    H1,
    P,
    Button,
    TextInput,
  },
  setup() {
    const store = useStore();
    const errorMessage = computed(() => store.state.errorMessage);
    const state = reactive({
      username: '',
      password: '',
    });

    const inputOnChange = event => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      store
        .dispatch('loginAction', {
          username: state.username,
          password: state.password,
        })
        .then(() => {
          console.log('good');
        })
        .catch(() => console.log('err'));
    };

    return {
      ...toRefs(state),
      onSubmit,
      inputOnChange,
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
