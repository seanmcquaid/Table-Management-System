<template>
  <div class="appContainer">
    <header></header>
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.appContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
