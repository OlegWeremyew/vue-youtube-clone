<template>
  <DropdownSettingsHeader
      title="Choose Your location"
      @back="$emit('select-menu', 'main')"
  />
  <section class="px-3 py-4 text-black text-sm space-y-4">
    <p>
      This helps hide potentially mature videos. No filter is 100% accurate.
    </p>
    <p>
      This setting only applies to this browser
    </p>
    <div class="text-gray-600 font-semibold flex items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input type="checkbox">
    </div>
  </section>
</template>

<script>

import DropDownSettingsListItem from "../DropDownSettingsListItem/DropDownSettingsListItem.vue";
import DropdownSettingsHeader from "../DropdownSettingsHeader/DropdownSettingsHeader.vue";

export default {
  name: 'TheDropdownSettingsRestrictedMode',
  components: {
    DropdownSettingsHeader,
    DropDownSettingsListItem
  },
  emits: ['select-menu'],
}
</script>
