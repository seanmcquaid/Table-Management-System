<template>
  <form @submit.prevent="onSubmit">
    <TextInput
      @input="inputOnChange"
      name="name"
      :value="name"
      label="Table Name"
      placeholder="Table name here"
      type="text"
    />
    <TextInput
      @input="inputOnChange"
      name="seats"
      :value="seats"
      label="Seats"
      placeholder="Seats here"
      type="text"
    />
    <Button type="submit">Submit</Button>
  </form>
</template>

<script>
import * as tableService from '../../api/tableService';
import { onMounted, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useErrorMessage from '@/composables/useErrorMessage';
import TextInput from '../../components/TextInput.vue';
import Button from '../../components/Button.vue';

export default {
  components: { TextInput, Button },
  setup() {
    const store = useStore();
    const { errorMessage } = useErrorMessage();
    const state = reactive({ name: '', seats: 0 });
    const router = useRouter();
    const route = useRoute();
    const { id } = route.params;

    onMounted(() => {
      tableService
        .getTable(parseInt(id))
        .then(
          ({
            data: {
              getTable: { name, seats },
            },
          }) => {
            state.name = name;
            state.seats = seats;
          }
        )
        .catch(({ graphQLErrors }) => {
          store.dispatch('setErrorMessage', {
            errorMessage:
              graphQLErrors[0].message ??
              'There was a problem getting this table info, please try again!',
          });
        });
    });

    const inputOnChange = event => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      store
        .dispatch('editTableAction', {
          name: state.name,
          seats: state.seats,
          id,
        })
        .then(() => {
          if (!errorMessage.value) {
            router.push('/tableManagement');
          }
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
