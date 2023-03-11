<template>
  <TheHeader @toggle-sidebar="toggleSidebar"/>
  <TheSidebarSmall :is-open="sidebarState === 'compact'"/>
  <TheSidebar :is-open="sidebarState === 'normal'"/>
  <TheSidebarMobile
      :is-open="isMobileSidebarOpen"
      @close="closeMobileSidebar"
  />
  <TheCategories :is-sidebar-open="sidebarState === 'normal'"/>
  <TheVideos :is-sidebar-open="sidebarState === 'normal'"/>
</template>

<script>

import TheSidebarSmall from "./components/TheSidebar/TheSidebarSmall.vue";
import TheSidebar from "./components/TheSidebar/TheSidebar.vue";
import TheSidebarMobile from "./components/TheSidebar/TheSidebarMobile/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories/TheCategories.vue";
import TheVideos from "./components/TheVideos/TheVideos.vue";
import TheHeader from "./components/TheHeader/TheHeader.vue";

export default {
  name: 'App',
  components: {TheHeader, TheVideos, TheCategories, TheSidebarMobile, TheSidebar, TheSidebarSmall},
  data: () => ({
    isMobileSidebarOpen: false,
    sidebarState: null
  }),
  methods: {
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.sidebarState = this.sidebarState === 'normal' ? 'compact' : 'normal'
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
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.sidebarState = 'compact'
    }

    if (window.innerWidth >= 1280) {
      this.sidebarState = 'normal'
    }
  },
}

</script>

<style scoped>

</style>
