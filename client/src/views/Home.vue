<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { useQuery } from '@vue/apollo-composable';
import { gql } from 'apollo-boost';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
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
