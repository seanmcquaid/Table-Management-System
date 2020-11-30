<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout';
export default {
  components: {
    DefaultLayout,
  },
};
</script>

<style>
body {
  background-color: #85cb33;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
