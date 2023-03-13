<template>
  <section class="py-2 border-b">
    <ul>
      <DropDownSettingsListItem
          v-for="listItem in listItems.slice(0, 8)"
          :key="listItem.label"
          :label="listItem.label"
      />
    </ul>
  </section>
</template>

<script>

import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";

export default {
  name: 'TheDropdownSettingsAppearance',
  components: {
    DropDownSettingsListItem
  },

  data: () => ({
    listItems: [
      {
        label: 'Use device theme',
      },
      {
        label: 'Dark theme',
      },
      {
        label: 'Light theme',
      },
    ]
  }),
}
</script>
