<template>
  <svg
      :class="$attrs.class || 'w-6 h-6'"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="base-icon"
      v-html="getPath"
  ></svg>
</template>

<script>
import {icons} from "../../../constants/icons.js";

export default {
  name: "BaseIcon",
  props: ['name'],
  computed: {
    getPath(){
      return icons[this.name]
    },
  },
}
</script>
