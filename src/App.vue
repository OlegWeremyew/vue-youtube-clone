<template>
  <TheHeader @toggle-sidebar="toggleSidebar"/>
  <TheSidebarCompact v-if="isCompactSidebarOpen"/>
  <TheSidebar v-if="isSidebarOpen"/>
  <TheSidebarMobile
      :is-open="isMobileSidebarOpen"
      @close="closeMobileSidebar"
  />
  <TheCategories :is-sidebar-open="isSidebarOpen"/>
  <TheVideos :is-sidebar-open="isSidebarOpen"/>
</template>

<script>

import TheSidebarCompact from "./components/TheSidebar/TheSidebarCompact/TheSidebarCompact.vue";
import TheSidebar from "./components/TheSidebar/TheSidebar.vue";
import TheSidebarMobile from "./components/TheSidebar/TheSidebarMobile/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories/TheCategories.vue";
import TheVideos from "./components/TheVideos/TheVideos.vue";
import TheHeader from "./components/TheHeader/TheHeader.vue";

export default {
  name: 'App',
  components: {TheHeader, TheVideos, TheCategories, TheSidebarMobile, TheSidebar, TheSidebarCompact},
  data: () => ({
    isMobileSidebarOpen: false,
    isCompactSidebarOpen: false,
    isSidebarOpen: false,
    isCompactSidebarActive: false,
  }),
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isCompactSidebarOpen = false
        this.isSidebarOpen = false
      } else if (window.innerWidth < 1280) {
        this.isCompactSidebarOpen = true
        this.isSidebarOpen = false
      } else {
        this.isCompactSidebarOpen = this.sidebarState
        this.isSidebarOpen = !this.sidebarState
        this.isMobileSidebarOpen = false
      }
    },
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.sidebarState = !this.sidebarState
        this.onResize()
      } else {
        this.openMobileSidebar()
      }
    },
    openMobileSidebar() {
      this.isMobileSidebarOpen = true
    },
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false
    },
  },
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize)
  },
}

</script>

<style scoped>

</style>
