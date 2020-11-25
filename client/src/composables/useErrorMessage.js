import { computed } from 'vue';
import { useStore } from 'vuex';

const useComposable = () => {
  const store = useStore();
  const errorMessage = computed(() => store.state.errorMessage);

  return { errorMessage };
};

export default useComposable;
