<template>
  <transition
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <TheSidebarMobileOverlay @click="$emit('close')" v-show="isOpen"/>
  </transition>

  <transition
      enter-active-class="transition ease-in-out duration-200 transform"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-200 transform"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
  >
    <aside
        v-show="isOpen"
        ref="mobileSidebar"
        tabindex="-1"
        @keydown.esc="$emit('close')"
        class="w-64 max-h-screen overflow-auto bg-white fixed z-40 outline-none"
    >
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button @click="$emit('close')" class="ml-2 mr-6 focus:outline-none">
          <BaseIcon name="menu"/>
        </button>
        <LogoMain/>
      </section>
      <SidebarContent/>
    </aside>
  </transition>
</template>
<script>
import TheSidebarMobileOverlay from "./TheSidebarMobileOverlay.vue";
import BaseIcon from "../../Common/BaseIcon/BaseIcon.vue";
import LogoMain from "../../TheHeader/LogoMain/LogoMain.vue";
import SidebarContent from "../SidebarContent/SidebarContent.vue";

export default {
  name: "TheSidebarMobile",
  emits: {
    close: null,
  },
  props: {
    isOpen: Boolean,
  },
  watch: {
    isOpen() {
      this.$nextTick(() => {
        if (this.isOpen) {
          this.$refs.mobileSidebar.focus()
        }
      })
    },
  },
  components: {TheSidebarMobileOverlay, BaseIcon, LogoMain, SidebarContent}
}
</script>