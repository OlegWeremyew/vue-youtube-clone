<template>
  <aside :class="classes">
    <section>
      <ul>
        <TheSideBarCompactNavItem
            v-for="navItem in navItems"
            :key="navItem.label"
            :label="navItem.label"
            :icon="navItem.icon"
            :is-active="navItem.isActive"
        />
      </ul>
    </section>
  </aside>
</template>

<script>
import TheSideBarCompactNavItem from "./TheSideBarCompactNavItem/TheSideBarCompactNavItem.vue";

export default {
  name: 'TheSidebarCompact',
  data: () => ({
    navItems: [
      {label: 'Home', icon: 'home', isActive: true},
      {label: 'Trending', icon: 'fire', isActive: false},
      {label: 'Subscription', icon: 'collection', isActive: false},
      {label: 'Library', icon: 'duplicate', isActive: false},
      {label: 'History', icon: 'clock', isActive: false},
    ],
  }),
  components: {TheSideBarCompactNavItem},
  computed: {
    classes() {
      return [
        'min-h-screen',
        'overflow-auto',
        'fixed',
        'top-0',
        'pt-14',
        'bg-white',
        'z-20'
      ]
    },
  },
}
</script>
