<template>
  <DropdownSettingsHeader
      title="Appearance"
      @back="$emit('close')"
  />
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul>
      <DropDownSettingsListItem
          v-for="(themeName, themeId) in themes"
          :key="themeId"
          :label="themeName"
          :active="themeId === selectedOptions.theme.id"
          @click="selectedOption({id: themeId, text: themeName})"
      />
    </ul>
  </section>
</template>

<script>
import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";
import DropdownSettingsHeader from "../DropdownSettingsHeader/DropdownSettingsHeader.vue";

export default {
  name: 'TheDropdownSettingsAppearance',
  components: {
    DropdownSettingsHeader,
    DropDownSettingsListItem
  },
  emits: ['close', 'select-option'],
  data: () => ({
    themes: [
      'Device theme',
      'Dark theme',
      'Light theme',
    ]
  }),
  props: {
    selectedOptions: Object,
  },
  methods: {
    selectedOption(theme) {
      this.$emit('select-option', {
        name: 'theme',
        value: theme,
      })
    },
  },
}
</script>
