<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { gql } from 'apollo-boost';

export default {
  name: 'Home',
  components: {},
  setup() {
    const query = gql`
      {
        getAllUsers {
          id
        }
      }
    `;
    const { result } = useQuery(query);

    console.log(result.value.getAllUsers);
  },
};
</script>
