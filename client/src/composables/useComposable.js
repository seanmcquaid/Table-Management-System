const { ref } = require('vue');

export const useComposable = () => {
  const x = ref(0);

  return { x };
};
