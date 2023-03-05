<template>
  <button
      type="button"
      class="focus:outline-none flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200"
  >
    <base-icon name="search" class="w-5 h-5"></base-icon>
  </button>
</template>

<script>
import BaseIcon from "../../Common/BaseIcon.vue";

export default {
  name: "TheSearchButton",
  components: {BaseIcon}
}
</script>

<style scoped>

</style>