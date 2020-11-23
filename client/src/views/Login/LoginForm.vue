<template>
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
</template>

<script>
import { reactive, toRefs } from 'vue';
import useErrorMessage from '@/composables/useErrorMessage';
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  components: {
    Button,
    TextInput,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { errorMessage } = useErrorMessage();

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
          if (!errorMessage.value) {
            router.push('/tableManagement');
          }
        })
        .catch(() => console.log('err'));
    };

    return {
      ...toRefs(state),
      onSubmit,
      inputOnChange,
    };
  },
};
</script>

<style></style>
