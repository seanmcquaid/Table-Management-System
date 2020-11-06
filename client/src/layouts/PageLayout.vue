<template>
  <div class="pageLayout"><slot /></div>
</template>

<style scoped>
.pageLayout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
