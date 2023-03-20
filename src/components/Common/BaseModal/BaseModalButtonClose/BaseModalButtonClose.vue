<template>
  <button type="button" class="p-2 focus:outline-none">
    <BaseIcon name="x"/>
  </button>
</template>

<script>
import BaseIcon from "../../BaseIcon/BaseIcon.vue";
export default {
  name: "BaseModalButtonClose",
  components: {BaseIcon},
}
</script>
