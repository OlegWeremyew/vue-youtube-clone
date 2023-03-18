<template>
  <DropdownSettingsHeader
      title="Choose Your language"
      @back="$emit('close')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropDownSettingsListItem
          v-for="(languageName, languageId) in languages"
          :key="languageId"
          :label="languageName"
          :active="languageId === selectedOptions.language.id"
          @click="selectedOption({id: languageId, text: languageName})"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from "../../../../mixins/dropdownSubmenu.js";

export default {
  name: 'TheDropdownSettingsLanguages',
  mixins: [dropdownSubmenu],
  data: () => ({
    optionName: 'language',
    languages: [
      'English',
      'Russian',
      'Deutch',
      'French',
    ],
  }),
}
</script>
