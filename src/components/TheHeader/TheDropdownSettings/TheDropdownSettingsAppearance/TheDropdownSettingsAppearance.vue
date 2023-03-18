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
import dropdownSubmenu from "../../../../mixins/dropdownSubmenu.js";

export default {
  name: 'TheDropdownSettingsAppearance',
  mixins: [dropdownSubmenu],
  data: () => ({
    optionName: 'theme',
    themes: [
      'Device theme',
      'Dark theme',
      'Light theme',
    ]
  }),
}
</script>
