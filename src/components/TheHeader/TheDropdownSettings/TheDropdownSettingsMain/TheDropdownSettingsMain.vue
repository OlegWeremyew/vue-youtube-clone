<template>
  <section class="py-2 border-b">
    <ul>
      <DropDownSettingsListItem
          v-for="menuItem in menuItems.slice(0, 8)"
          :key="menuItem.label"
          :label="menuItem.label"
          :icon="menuItem.icon"
          :with-sub-menu="menuItem.withSubMenu"
          @click.stop="selectMenu(menuItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropDownSettingsListItem
          :label="menuItems[8].label"
          :with-sub-menu="menuItems[8].withSubMenu"
          :icon="menuItems[8].icon"
          @click.stop="selectMenu(menuItems[8])"
      />
    </ul>
  </section>
</template>

<script>

import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";

export default {
  name: 'TheDropdownSettingsMain',
  components: {
    DropDownSettingsListItem,
  },
  props: ['menuItems'],
  emits: ['select-menu'],
  methods: {
    selectMenu(menuItem) {
      if (menuItem.withSubMenu) {
        this.$emit('select-menu', menuItem)
      }
    },
  },
}
</script>
