<template>
  <li>
    <a
        href="#"
        class="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
    >
      <BaseIcon
          v-if="icon"
          :name="icon"
          class="w-5 h-5 mr-3 text-gray-400"
      />
      <span>{{ label }}</span>
      <BaseIcon
          v-if="withSubMenu"
          name="chevronRight"
          class="w-5 h-5 text-gray-400 ml-auto"
      />
    </a>
  </li>
</template>

<script>
import BaseIcon from "../../../Common/BaseIcon.vue";

export default {
  name: "DropDownSettingsListItem",
  props: {
    icon: {
      type: String,
      required: false,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    withSubMenu: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {BaseIcon},
}
</script>

<style scoped>

</style>