<template>
  <li>
    <a href="#" :class="classes">
      <base-icon
          :name="icon"
          :class="iconClasses"
      ></base-icon>
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "@/components/Common/BaseIcon/BaseIcon.vue";

export default {
  name: "SidebarNavItem",
  components: {BaseIcon},
  props: {
    isActive: Boolean,
    label: String,
    icon: String,
  },
  computed: {
    classes() {
      const classes = ['flex', 'items-center', 'px-6', 'py-2', 'text-sm']
      return this.isActive
          ? [...classes, 'font-medium', 'text-gray-800', 'bg-gray-200', 'hover:bg-gray-300']
          : [...classes, "hover:bg-gray-100"]
    },
    iconClasses() {
      return this.isActive
          ? 'w-6 h-6 mr-6 text-red-500'
          : 'w-6 h-6 mr-6'
    },
  },
}
</script>
