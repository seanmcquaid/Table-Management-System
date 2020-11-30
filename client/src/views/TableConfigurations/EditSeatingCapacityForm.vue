<template>
  <form @submit.prevent="onSubmit">
    <span v-if="!containsNums && seatingCapacity.length > 0">
      ONLY use numbers for seating capacity!
    </span>
    <TextInput
      @input="inputOnChange"
      name="seatingCapacity"
      :value="seatingCapacity"
      label="Seating Capacity"
      placeholder="Seating capacity here"
      type="text"
    />
    <Button type="submit" :disabled="!containsNums">
      Update Seating Capacity
    </Button>
  </form>
</template>

<script>
import { computed, reactive, toRefs, watch } from 'vue';
import TextInput from '../../components/TextInput.vue';
import Button from '../../components/Button.vue';
import { useStore } from 'vuex';
export default {
  components: { TextInput, Button },
  setup() {
    const store = useStore();
    const seatingCapacity = computed(
      () => store.state.tableConfig.seatingCapacity
    );
    const state = reactive({ seatingCapacity: 0 });

    watch(seatingCapacity, capacity => {
      state.seatingCapacity = capacity;
    });

    const containsNums = computed(
      () => `${state.seatingCapacity}`.match(/^[0-9]+$/) !== null
    );

    const inputOnChange = event => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      store.dispatch('updateSeatingCapacityAction', {
        ...state,
      });
    };

    return {
      ...toRefs(state),
      onSubmit,
      containsNums,
      inputOnChange,
    };
  },
};
</script>

<style></style>
