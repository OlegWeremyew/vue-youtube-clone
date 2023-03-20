<template>
  <button :class="classes">
    <base-icon name="userCircle" class="mr-2 w-7 h-7"></base-icon>
    Sign In
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon/BaseIcon.vue";

export default {
  name: "ButtonLogin",
  components: {BaseIcon},
  computed: {
    classes(){
      return this.$attrs.class || "focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
    }
  }
}
</script>

<style scoped>

</style>