<template>
  <div class="appContainer">
    <header>
      <nav>
        <ul v-if="isAuthenticated">
          <li><router-link to="/">Home</router-link></li>
        </ul>
        <ul v-else></ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      © Sean McQuaid 2020
    </footer>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.state.auth.isAuthenticated);

    return {
      isAuthenticated,
    };
  },
};
</script>

<style scoped>
.appContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
}

main {
  width: 100%;
}

footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 1rem 0;
}
</style>
