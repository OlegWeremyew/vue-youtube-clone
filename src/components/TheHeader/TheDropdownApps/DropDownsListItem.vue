<template>
  <li>
    <a
        href="#"
        class="flex items-center px-3 py-2 text-sm hover:bg-gray-100"
    >
      <BaseIcon name="play" class="w-6 h-6 mr-3 text-red-500"/>
      <span>{{label}}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "../../Common/BaseIcon/BaseIcon.vue";

export default {
  name: "DropDownsListItem",
  components: {
    BaseIcon,
  },
  props: {
    label: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>

</style>