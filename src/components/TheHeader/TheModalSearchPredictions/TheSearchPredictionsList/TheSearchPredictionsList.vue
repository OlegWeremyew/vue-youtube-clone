<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div
        v-for="(label, index) in searchPredictions"
        :key="label"
        class="flex items-center"
    >
<!--      <BaseCheckbox-->
<!--          :id="`search-prediction-${index}`"-->
<!--          :value="label"-->
<!--          v-bind="$attrs"-->
<!--          v-model="selectedSearchPredictions"-->
<!--      />-->
      <input
          type="checkbox"
          class="h-5 w-5 cursor-pointer"
          :id="`search-prediction-${index}`"
          :value="label"
          v-model="selectedSearchPredictions"
      />
      <label :for="index" class="pl-4 cursor-pointer flex-grow">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "../../../Common/BaseCheckbox/BaseCheckbox.vue";
export default {
  components: {BaseCheckbox},
  props: {
    searchPredictions: Array,
    modelValue: Array
  },

  emits: ['update:modelValue'],

  data () {
    return {
      selectedSearchPredictions: this.modelValue
    }
  },

  watch: {
    selectedSearchPredictions () {
      this.$emit('update:modelValue', this.selectedSearchPredictions)
    }
  }
}
</script>
