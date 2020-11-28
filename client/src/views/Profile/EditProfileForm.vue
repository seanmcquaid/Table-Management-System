<template>
  <form @submit.prevent="onSubmit">
    <span v-if="newPassword !== confirmPassword">Passwords must match</span>
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
    <Button type="submit" disabled="newPassword !== confirmPassword">
      Login
    </Button>
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue';
import * as userService from '../../api/userService';
import useErrorMessage from '@/composables/useErrorMessage';
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Button,
    TextInput,
  },
  setup() {
    // const router = useRouter();
    // const { errorMessage } = useErrorMessage();

    const state = reactive({
      newPassword: '',
      confirmNewPassword: '',
    });

    const inputOnChange = event => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      userService
        .updatePassword(state.newPassword)
        .then(data => console.log(data))
        .catch(err => console.log(err));
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
