import { computed } from 'vue';
import { useStore } from 'vuex';

const useComposable = () => {
  const store = useStore();
  const errorMessage = computed(() => store.state.errorMessage);

  console.log(errorMessage.value);

  return { errorMessage };
};

export default useComposable;
