<template>
  <input
      type="checkbox"
      class="h-5 w-5 cursor-pointer"
      :id="id"
  />
  <label
      v-if="$slots.default"
      :for="id"
      class="ml-4 cursor-pointer flex-grow"
  >
    <slot/>
  </label>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
  }
}
</script>
