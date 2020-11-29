<template>
  <form @submit.prevent="onSubmit">
    <span v-if="newPassword !== confirmPassword && confirmPassword.length > 0">
      Passwords must match
    </span>
    <TextInput
      @input="inputOnChange"
      name="newPassword"
      :value="newPassword"
      label="New Password"
      placeholder="New password here"
      type="password"
    />
    <TextInput
      @input="inputOnChange"
      name="confirmPassword"
      :value="confirmPassword"
      label="Confirm New Password"
      placeholder="Confirm new password here"
      type="password"
    />
    <Button type="submit" :disabled="newPassword !== confirmPassword">
      Login
    </Button>
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue';
import * as userService from '../../api/userService';
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    Button,
    TextInput,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      newPassword: '',
      confirmPassword: '',
    });

    const inputOnChange = event => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      userService
        .updatePassword(state.newPassword)
        .then(() => {
          router.push('/tableManagement');
        })
        .catch(({ graphQLErrors }) => {
          store.dispatch('setErrorMessage', {
            errorMessage:
              graphQLErrors[0].message ??
              'There was a problem submitting the new password, please try again!',
          });
        });
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
