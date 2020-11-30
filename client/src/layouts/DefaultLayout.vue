<template>
  <div class="appContainer">
    <header>
      <nav>
        <ul v-if="isAuthenticated">
          <li><router-link>User Home</router-link></li>
          <li><router-link>Profile</router-link></li>
          <li><router-link>Tables</router-link></li>
        </ul>
        <ul v-else>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
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
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.state.auth.isAuthenticated);

    onMounted(() => {
      // if there is a token in local storage, dispatch get user info action
    });

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
  font-family: 'Karla', sans-serif;
  color: black;
}

nav {
  width: 100%;
  background-color: #100b00;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 1rem;
  margin: 0;
}

li {
  padding: 0.25rem;
}

a {
  color: white;
  text-decoration: none;
  font-family: 'Karla', sans-serif;
}

a:hover {
  text-decoration: underline;
}

header {
  width: 100%;
}

main {
  width: 100%;
  height: 100%;
}

footer {
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 1rem 0;
}
</style>
