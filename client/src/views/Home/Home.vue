<template>
  <PageLayout>
    <H1>Table Management System</H1>
    <P>
      A solution for keeping track of tables in your restaurant during this
      turbulent time.
    </P>
    <div class="linkButtonsContainer">
      <LinkButton :route="'/login'">Login</LinkButton>
      <LinkButton :route="'/register'">Register</LinkButton>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/Typography/H1.vue';
import P from '@/components/Typography/P.vue';
import LinkButton from '@/components/LinkButton.vue';

export default {
  components: {
    PageLayout,
    H1,
    P,
    LinkButton,
  },
};
</script>

<style scoped>
.linkButtonsContainer {
  height: 100px;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
