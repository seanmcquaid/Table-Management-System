<template>
  <PageLayout>
    <H1>Table Management System</H1>
    <div class="linkButtonsContainer">
      <LinkButton route="/tableConfigurations">
        Table Configurations
      </LinkButton>
      <LinkButton route="/currentTables">
        Current Tables
      </LinkButton>
      <LinkButton route="/profile">
        Profile
      </LinkButton>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/universal/Typography/H1.vue';
import LinkButton from '@/components/universal/LinkButton.vue';
export default {
  components: {
    PageLayout,
    H1,
    LinkButton,
  },
};
</script>

<style>
.linkButtonsContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
