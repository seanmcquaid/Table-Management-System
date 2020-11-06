<template>
  <PageLayout>
    <H1>login</H1>
    <TextInput v-model="username" />
  </PageLayout>
</template>

<script>
import { ref } from 'vue';
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import TextInput from '@/components/universal/TextInput.vue';

export default {
  name: 'Home',
  components: {
    PageLayout,
    H1,
    TextInput,
  },
  setup() {
    const username = ref('');
    console.log(username);

    return {
      username,
    };
  },
};
</script>

<style scoped>
.linkButtonsContainer {
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
