<template>
  <aside :class="classes">
    <SidebarContent/>
  </aside>
</template>
<script>

import SidebarContent from "./SidebarContent/SidebarContent.vue";

export default {
  name: 'TheSidebar',
  components: {SidebarContent},
  props: {
    isOpen: Boolean,
    required: true
  },
  computed: {
    classes() {
      return [
        this.isOpen
            ? 'xl:block'
            : 'hidden',
        'w-64',
        'max-h-screen',
        'overflow-auto',
        'fixed',
        'top-0',
        'pt-12',
        'bg-white',
        'z-20',
      ]
    }
  }
}
</script>