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

import dropdownSubmenu from "@/mixins/dropdownSubmenu.js";

export default {
  name: 'TheDropdownSettingsLocation',
  mixins: [dropdownSubmenu],
  data: () => ({
    optionName: 'location',
    locations: [
      'United States',
      'Russian',
      'France',
      'China',
    ],
  }),
}
</script>
