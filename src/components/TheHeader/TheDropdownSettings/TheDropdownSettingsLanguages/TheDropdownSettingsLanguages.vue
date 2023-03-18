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
import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";
import DropdownSettingsHeader from "../DropdownSettingsHeader/DropdownSettingsHeader.vue";

export default {
  name: 'TheDropdownSettingsLanguages',
  components: {
    DropdownSettingsHeader,
    DropDownSettingsListItem
  },
  emits: ['close', 'select-option'],
  data: () => ({
    languages: [
      'English',
      'Russian',
      'Deutch',
      'French',
    ],
  }),
  props: {
    selectedOptions: Object,
  },
  methods: {
    selectedOption(language) {
      this.$emit('select-option', {
        name: 'language',
        value: language,
      })
    },
  },
}
</script>
