<template>
  <li>
    <a
        @click.prevent
        href="#"
        class="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
    >
      <BaseIcon
          v-if="isIconShown"
          :name="iconName"
          class="w-5 h-5 mr-3 text-gray-400"
      />
      <span :class="['truncate','flex-1',{'ml-8': !isIconShown && icon}]">
        {{ label }}
      </span>
      <BaseIcon
          v-if="withSubMenu"
          name="chevronRight"
          class="w-5 h-5 text-gray-400 ml-auto"
      />
    </a>
  </li>
</template>

<script>
import BaseIcon from "../../../Common/BaseIcon/BaseIcon.vue";

export default {
  name: "DropDownSettingsListItem",
  props: {
    icon: {
      type: String,
      required: false,
      default: "check",
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
    active: Boolean,
  },
  components: {BaseIcon},
  computed: {
    isIconShown() {
      return this.active || (this.icon !== 'check' && this.icon !== null)
    },
    iconName() {
      return this.active ? 'check' : this.icon
    },
  },
}
</script>
