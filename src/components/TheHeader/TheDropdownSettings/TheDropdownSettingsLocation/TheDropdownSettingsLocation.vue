<template>
  <DropdownSettingsHeader
      title="Choose Your location"
      @back="$emit('close')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropDownSettingsListItem
          v-for="(locationName, locationId) in locations"
          :key="locationId"
          :label="locationName"
          :active="locationId === selectedOptions.location.id"
          @click="selectedOption({id: locationId, text: locationName})"
      />
    </ul>
  </section>
</template>

<script>

import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";
import DropdownSettingsHeader from "../DropdownSettingsHeader/DropdownSettingsHeader.vue";

export default {
  name: 'TheDropdownSettingsLocation',
  components: {
    DropdownSettingsHeader,
    DropDownSettingsListItem
  },
  emits: ['close', 'select-option'],
  data: () => ({
    locations: [
      'United States',
      'Russian',
      'France',
      'China',
    ],
  }),
  props: {
    selectedOptions: Object,
  },
  methods: {
    selectedOption(location) {
      this.$emit('select-option', {
        name: 'location',
        value: location,
      })
    },
  },
}
</script>
