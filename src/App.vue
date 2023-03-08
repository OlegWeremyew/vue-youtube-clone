<template>
  <TheHeader @open-mobile-sidebar="openMobileSidebar"/>
  <TheSidebarSmall/>
  <TheSidebar/>
  <TheSidebarMobile
      :is-open="isMobileSidebarOpen"
      @close="closeMobileSidebar"
  />
  <TheCategories/>
  <TheVideos/>
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
    isMobileSidebarOpen: false
  }),
  methods: {
    openMobileSidebar() {
      this.isMobileSidebarOpen = true
    },
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false
    },
  },
}

</script>

<style scoped>

</style>
