<template>
<!--  <input-->
<!--      type="radio"-->
<!--      class="h-5 w-5 cursor-pointer"-->
<!--      :id="id"-->
<!--      v-bind="$attrs"-->
<!--      v-model="modelValue"-->
<!--  />-->
<!--  <label-->
<!--      v-if="$slots.default"-->
<!--      :for="id"-->
<!--      class="ml-4 cursor-pointer flex-grow"-->
<!--  >-->
<!--    <slot/>-->
<!--  </label>-->
</template>

<script lang="ts">
export default {
  name: "BaseRadio",
  props: {
    id: String,
    modelValue: String,
  },
}
</script>
