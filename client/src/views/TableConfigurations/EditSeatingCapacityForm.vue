<template>
  <form @submit.prevent="onSubmit">
    <span v-if="!containsNums">
      ONLY use numbers for seating capacity!
    </span>
    <TextInput
      @input="inputOnChange"
      name="seatingCapacity"
      :value="seatCapacity"
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
import { computed, reactive, toRefs } from 'vue';
import TextInput from '../../components/universal/TextInput.vue';
import Button from '../../components/universal/Button.vue';
import { useStore } from 'vuex';
export default {
  components: { TextInput, Button },
  setup() {
    const store = useStore();
    const seatingCapacity = computed(
      () => store.state.tableConfig.seatingCapacity
    );
    const state = reactive({ seatingCapacity });
    const containsNums = computed(() => state.seatingCapacity.match(/\D+/));

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
