<template>
  <DropdownSettingsHeader
      title="Choose Your language"
      @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropDownSettingsListItem
          v-for="(languageName, languageId) in languages"
          :key="languageId"
          :label="languageName"
          :active="languageId === selectedLanguageId"
          @click="this.selectedLanguageId = languageId"
      />
    </ul>
  </section>
</template>

<script>

import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";
import DropdownSettingsHeader from "../DropdownSettingsHeader/DropdownSettingsHeader.vue";

export default {
  name: 'TheDropdownSettingsLanguages',
  components: {
    DropdownSettingsHeader,
    DropDownSettingsListItem
  },
  emits: ['select-menu'],
  data: () => ({
    selectedLanguageId: 0,
    languages: [
      'English',
      'Russian',
      'Deutch',
      'French',
    ],
  }),
}
</script>
