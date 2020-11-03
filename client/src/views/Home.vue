<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { gql } from 'apollo-boost';
import { onMounted, reactive } from 'vue';

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

    const result = reactive({ data: [] });

    onMounted(() => {
      result.data = useQuery(query);
    });

    console.log(result);
    return {
      result,
    };
  },
};
</script>
