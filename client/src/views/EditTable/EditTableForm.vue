<template>
  <form></form>
</template>

<script>
import * as tableService from '../../api/tableService';
import { onMounted, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useErrorMessage from '@/composables/useErrorMessage';

export default {
  setup() {
    const store = useStore();
    const { errorMessage } = useErrorMessage();
    const state = reactive({ name: '', seats: 0 });
    const router = useRouter();
    const route = useRoute();
    const { id } = route.params;

    onMounted(() => {
      tableService
        .getTable(id)
        .then(({ getTable: { name, seats } }) => {
          state.name = name;
          state.seats = seats;
        })
        .catch(({ graphQLErrors }) => {
          store.dispatch('setErrorMessage', {
            errorMessage:
              graphQLErrors[0].message ??
              'There was a problem getting this table info, please try again!',
          });
        });
    });

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
    };
  },
};
</script>

<style></style>
