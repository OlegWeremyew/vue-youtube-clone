<template>
  <DropdownSettingsHeader
      title="Choose Your location"
      @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropDownSettingsListItem
          v-for="(locationName, locationId) in locations"
          :key="locationId"
          :label="locationName"
          :active="locationId === selectedLocationId"
          @click="this.selectedLocationId = locationId"
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
  emits: ['select-menu'],
  data: () => ({
    selectedLocationId: 0,
    locations: [
      'United States',
      'Russian',
      'France',
      'China',
    ],
  }),
}
</script>
