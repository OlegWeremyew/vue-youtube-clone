<template>
  <button
      class="focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
  >
    <base-icon name="user" class="mr-2 w-7 h-7"></base-icon>
    Sign In
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "ButtonLogin",
  components: {BaseIcon}
}
</script>

<style scoped>

</style>