<template>
  <PageLayout>
    <H1>Register</H1>
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
import { useRouter } from 'vue-router';

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
    const router = useRouter();
    const errorMessage = computed(() => store.state.errorMessage);
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
