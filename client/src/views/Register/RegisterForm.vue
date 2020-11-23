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
    <span v-if="password !== confirmPassword">
      These two passwords must match!
    </span>
    <TextInput
      @input="inputOnChange"
      name="confirmPassword"
      :value="confirmPassword"
      label="Confirm Password"
      placeholder="Confirm password here"
      type="password"
    />
    <Button type="submit" :disabled="!ableToSubmit">
      Register
    </Button>
  </form>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
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
      confirmPassword: '',
    });
    const ableToSubmit = computed(
      () =>
        state.password === state.confirmPassword && state.password.length > 0
    );

    const inputOnChange = event => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      if (ableToSubmit.value) {
        store
          .dispatch('registerAction', {
            username: state.username,
            password: state.password,
          })
          .then(() => {
            if (!errorMessage.value) {
              router.push('/tableManagement');
            }
          })
          .catch(() => console.log('err'));
      }
    };

    return {
      ...toRefs(state),
      ableToSubmit,
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
